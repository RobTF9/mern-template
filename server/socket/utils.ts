import { Server } from 'socket.io'

export function emitter<T>(e: EventFromClient<unknown>, event: string, data: T, io: Server) {
  io.to(e.room).emit(event, data)
}
