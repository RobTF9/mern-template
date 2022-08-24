import { useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'

function useSocket(id: string) {
  const socket = useRef<Socket | null>(null)

  function emitter(event: string, data: string) {
    if (socket.current) {
      socket.current.emit(event, data)
    }
  }

  useEffect(() => {
    if (socket.current == null) {
      socket.current = io()
    }

    socket.current.on('connect', () => {
      console.log('connect')
      emitter('join', id)
    })

    socket.current.on('joined', (room: string) => {
      console.log(room)
    })

    socket.current.on('disconnect', () => {
      console.log('disconnected')
    })

    socket.current.onAny((e, d) => {
      console.log(e, d)
    })

    return () => {
      if (socket.current) {
        socket.current.close()
        socket.current.off('connect')
        socket.current.off('disconnect')
      }
    }
  }, [])

  return { emitter }
}

export default useSocket
