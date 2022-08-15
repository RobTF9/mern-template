import { useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'

function useSocket() {
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io()
      return
    }
  }, [])

  const { current: socket } = socketRef

  useEffect(() => {
    if (socket)
      socket.on('connect', () => {
        console.log('connected')
        console.log(socket.id)
        socket.emit('joined', socket.id)
      })

    return () => {
      if (socket) socket.off('connect')
    }
  }, [socket])

  return { socket }
}

export default useSocket
