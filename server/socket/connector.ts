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

    socket.on('disconnect', () => {
      console.log('A user has disconnected')
    })
  })
}

export default connectWebSocket
