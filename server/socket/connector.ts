import { Server } from 'socket.io'
import { EVENTS } from '../constants'
import List from '../resources/list/model'

interface EventFromClient<T> {
  room: string
  data?: T
}

function connectWebSocket(io: Server) {
  io.on('connect', (socket) => {
    console.log('A user is connected')

    socket.on(EVENTS.JOIN, async (e: EventFromClient<undefined>) => {
      socket.join(e.room)
      const list = await List.findById(e.room)
      io.to(e.room).emit(EVENTS.JOINED, list)
    })

    socket.on(EVENTS.CREATE_ITEM, async (e: EventFromClient<{ item: string }>) => {
      const list = await List.findByIdAndUpdate(
        e.room,
        { $push: { items: { $each: [e.data] } } },
        { new: true }
      )

      io.to(e.room).emit(EVENTS.ITEM_CREATED, list)
    })

    socket.on(EVENTS.UPDATE_ITEM, async (e: EventFromClient<{ id: string; update: string }>) => {
      const list = await List.findById(e.room)
      if (list && e.data) {
        const update = list?.items.map((i) =>
          `${i._id}` === e.data?.id ? { ...i, item: e.data.update } : i
        )
        list.items = update
        list.save()
      }
      io.to(e.room).emit(EVENTS.ITEM_UPDATED, list)
    })

    socket.on(EVENTS.USER_FOCUSED, (e: EventFromClient<{ itemId: string; userId: string }>) => {
      io.to(e.room).emit(EVENTS.USER_FOCUSED, { ...e.data })
    })

    socket.on(EVENTS.USER_UNFOCUSED, (e: EventFromClient<{ itemId: string; userId: string }>) => {
      io.to(e.room).emit(EVENTS.USER_UNFOCUSED, { ...e.data })
    })

    socket.on(EVENTS.DISCONNECT, () => {
      console.log('A user has disconnected')
    })
  })
}

export default connectWebSocket
