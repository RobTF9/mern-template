import { useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'

function useSocket() {
  const socket = useRef<Socket | null>(null)

  useEffect(() => {
    if (socket.current == null) {
      socket.current = io()
    }

    socket.current.on('connect', () => {
      console.log('connect')
    })

    socket.current.on('disconnect', () => {
      console.log('disconnected')
    })

    socket.current.onAny((e) => {
      console.log(e)
    })

    return () => {
      if (socket.current) {
        socket.current.off('connect')
        socket.current.off('disconnect')
      }
    }
  }, [])

  function emitter(event: string, data: string) {
    if (socket.current) {
      socket.current.emit(event, data)
    }
  }

  return { emitter }
}

export default useSocket
