import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'

function useSocket<T>(id: string, listeners?: [string, (d: T) => void][]) {
  const [list, setList] = useState<ListResource | undefined>()
  const socket = useRef<Socket | null>(null)

  function emitter<T>(event: string, data: T) {
    if (socket.current) {
      socket.current.emit(event, { room: id, data })
    }
  }

  function updateItem(id: string, update: string) {
    emitter('update item', { id, update })
  }

  useEffect(() => {
    if (socket.current == null) {
      socket.current = io()
    }

    socket.current.on('connect', () => {
      console.log('connect')
      emitter('join', id)
    })

    socket.current.on('joined', (list: ListResource) => {
      setList(list)
    })

    socket.current.on('item created', (list: ListResource) => {
      setList(list)
    })

    socket.current.on('item updated', (list: ListResource) => {
      console.log('recieved')
      console.log(list)
      setList(list)
    })

    socket.current.on('disconnect', () => {
      console.log('disconnected')
    })

    socket.current.onAny((e, d) => {
      listeners?.forEach(([event, action]) => {
        if (e === event) {
          action(d)
        }
      })
    })

    return () => {
      if (socket.current) {
        socket.current.close()
        socket.current.off('connect')
        socket.current.off('disconnect')
      }
    }
  }, [])

  return { emitter, list, updateItem }
}

export default useSocket
