import { Server } from 'socket.io'
import List from '../resources/list/model'

interface EventFromClient<T> {
  room: string
  data?: T
}

function connectWebSocket(io: Server) {
  io.on('connect', (socket) => {
    console.log('A user is connected')

    socket.on('join', async (e: EventFromClient<undefined>) => {
      socket.join(e.room)
      const list = await List.findById(e.room)
      io.to(e.room).emit('joined', list)
    })

    socket.on('create item', async (e: EventFromClient<{ item: string }>) => {
      const list = await List.findByIdAndUpdate(
        e.room,
        { $push: { items: { $each: [e.data] } } },
        { new: true }
      )

      io.to(e.room).emit('item created', list)
    })

    socket.on('update item', async (e: EventFromClient<{ id: string; update: string }>) => {
      const list = await List.findById(e.room)
      if (list && e.data) {
        const update = list?.items.map((i) =>
          `${i._id}` === e.data?.id ? { ...i, item: e.data.update } : i
        )
        list.items = update
        list.save()
      }
      io.to(e.room).emit('item updated', list)
    })

    socket.on('user focused', (e: EventFromClient<{ itemId: string; userId: string }>) => {
      io.to(e.room).emit('user focused', { ...e.data })
    })

    socket.on('user unfocused', (e: EventFromClient<{ itemId: string; userId: string }>) => {
      io.to(e.room).emit('user unfocused', { ...e.data })
    })

    socket.on('disconnect', () => {
      console.log('A user has disconnected')
    })
  })
}

export default connectWebSocket
