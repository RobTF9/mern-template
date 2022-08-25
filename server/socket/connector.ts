import { Server } from 'socket.io'

function connectWebSocket(io: Server) {
  io.on('connect', (socket) => {
    console.log('A user is connected')

    socket.on('join', (room: string) => {
      socket.join(room)
      io.to(room).emit('joined', room)
      socket.request.session.room = room
      socket.request.session.save()
    })

    socket.on('disconnect', () => {
      console.log('A user has disconnected')
    })
  })
}

export default connectWebSocket
