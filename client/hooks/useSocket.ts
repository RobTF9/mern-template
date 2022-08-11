import { useEffect, useRef } from 'react'
import { Socket } from 'socket.io'
import { io } from 'socket.io-client'

function useSocket() {
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    console.log('in hook')
    if (!socketRef.current) {
      socketRef.current = io()
      console.log('in condition')
      return
    }
  }, [])

  return socketRef
}

export default useSocket
