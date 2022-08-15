import { useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'
import { queryClient } from '../context/query'

function useSocket() {
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io()
      return
    }
  }, [socketRef])

  const { current: socket } = socketRef

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log('connected')
        console.log(socket.id)
      })

      socket.on('refresh', () => {
        console.log('refresh')
        queryClient.invalidateQueries(['/api/item'])
      })
    }

    return () => {
      if (socket) socket.off('connect')
    }
  }, [socket])

  return { socket }
}

export default useSocket
