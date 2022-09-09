import { Server } from 'socket.io'
import { EVENTS } from '../constants'
import listHandler from '../resources/list/handler'
import { emitter } from './utils'

function connectWebSocket(io: Server) {
  io.on('connect', (socket) => {
    console.log('A user is connected')

    let users: RoomUser[] = []

    for (const [id, socket] of io.of('/').sockets) {
      users = [
        ...users,
        {
          socket: id,
          username: socket.request.session.user.username,
          _id: socket.request.session.user._id,
        },
      ]
    }

    socket.on(EVENTS.LIST_JOIN_REQUEST, async (e: EventFromClient<undefined>) => {
      socket.join(e.room)
      const list = await listHandler(EVENTS.LIST_JOIN_REQUEST, e)
      emitter(e, EVENTS.LIST_JOINED, { list, users }, io)
    })

    socket.on(EVENTS.LIST_CREATE_ITEM, async (e: EventFromClient<{ item: string }>) => {
      const list = await listHandler(EVENTS.LIST_CREATE_ITEM, e)
      emitter(e, EVENTS.LIST_ITEM_CREATED, list, io)
    })

    socket.on(EVENTS.LIST_UPDATE_ITEM, async (e: EventFromClient<{ id: string; item: string }>) => {
      const list = await listHandler(EVENTS.LIST_UPDATE_ITEM, e)
      emitter(e, EVENTS.LIST_ITEM_UPDATED, list, io)
    })

    socket.on(
      EVENTS.LIST_USER_FOCUSED_ITEM,
      (e: EventFromClient<{ itemId: string; userId: string }>) => {
        emitter(e, EVENTS.LIST_USER_FOCUSED_ITEM, { ...e.data }, io)
      }
    )

    socket.on(
      EVENTS.LIST_USER_UNFOCUSED_ITEM,
      (e: EventFromClient<{ itemId: string; userId: string }>) => {
        emitter(e, EVENTS.LIST_USER_UNFOCUSED_ITEM, { ...e.data }, io)
      }
    )
    socket.onAny((e, d) => console.log(e, d))

    socket.on('disconnect', () => {
      users = users.filter((user) => user.socket !== socket.id)
      io.emit(EVENTS.LIST_DISCONNECTED, users)
      console.log('A user has disconnected')
    })
  })
}

export default connectWebSocket
