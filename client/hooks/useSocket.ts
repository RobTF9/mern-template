import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { useAuthContext } from '../context/auth'

interface FocusedUser {
  userId: string
  itemId: string
}

function useSocket<T>(id: string, listeners?: [string, (d: T) => void][]) {
  const { user } = useAuthContext()
  const [list, setList] = useState<ListResource | undefined>()
  const [itemsFocusedOnByOtherUsers, setItemsFocusedOnByOtherUsers] = useState<FocusedUser[]>([])
  const socket = useRef<Socket | null>(null)

  useEffect(() => {
    if (itemsFocusedOnByOtherUsers) {
      console.log(itemsFocusedOnByOtherUsers)
    }
  }, [itemsFocusedOnByOtherUsers])

  function emitter<T>(event: string, data: T) {
    if (socket.current) {
      socket.current.emit(event, { room: id, data })
    }
  }

  function updateItem(id: string, update: string) {
    emitter('update item', { id, update })
  }

  function userFocusedOnItem(itemId: string) {
    emitter('user focused', { userId: user?._id, itemId })
  }

  function userUnfocusedOnItem(itemId: string) {
    emitter('user unfocused', { userId: user?._id, itemId })
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

    socket.current.on('user focused', (data: FocusedUser) => {
      if (data.userId !== user?._id) {
        setItemsFocusedOnByOtherUsers((prev) => [...prev, data])
      }
    })

    socket.current.on('user unfocused', (data: FocusedUser) => {
      console.log(data.userId, user?._id)
      if (data.userId !== user?._id) {
        setItemsFocusedOnByOtherUsers((prev) => prev.filter((item) => item.itemId !== data.itemId))
      }
    })

    socket.current.on('item created', (list: ListResource) => {
      setList(list)
    })

    socket.current.on('item updated', (list: ListResource) => {
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

  return {
    emitter,
    list,
    updateItem,
    userFocusedOnItem,
    userUnfocusedOnItem,
    itemsFocusedOnByOtherUsers,
  }
}

export default useSocket
