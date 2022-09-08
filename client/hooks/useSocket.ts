import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { EVENTS } from '../constants'
import { useAuthContext } from '../context/auth'

export interface FocusedUser {
  userId: string
  itemId: string
}

function useSocket<T>(id: string, listeners?: [string, (d: T) => void][]) {
  const { user } = useAuthContext()
  const [list, setList] = useState<ListResource | undefined>()
  const [itemsFocusedOnByOtherUsers, setItemsFocusedOnByOtherUsers] = useState<FocusedUser[]>([])
  const socket = useRef<Socket | null>(null)
  const [roomUsers, setRoomUsers] = useState<RoomUser[]>([])

  function emitter<T>(event: string, data: T) {
    if (socket.current) {
      socket.current.emit(event, { room: id, data })
    }
  }

  function createItem(item: string) {
    emitter(EVENTS.LIST_CREATE_ITEM, { item })
  }

  function updateItem(id: string, update: string) {
    emitter(EVENTS.LIST_UPDATE_ITEM, { id, update })
  }

  function userFocusedOnItem(itemId: string) {
    emitter(EVENTS.LIST_USER_FOCUSED_ITEM, { userId: user?._id, itemId })
  }

  function userUnfocusedOnItem(itemId: string) {
    emitter(EVENTS.LIST_USER_UNFOCUSED_ITEM, { userId: user?._id, itemId })
  }

  useEffect(() => {
    if (socket.current == null) {
      socket.current = io()
    }

    socket.current.on(EVENTS.CONNECT, () => {
      emitter(EVENTS.LIST_JOIN_REQUEST, id)
    })

    socket.current.on(
      EVENTS.LIST_JOINED,
      ({ list, users }: { list: ListResource; users: RoomUser[] }) => {
        setList(list)
        setRoomUsers(users)
      }
    )

    socket.current.on(EVENTS.LIST_USER_FOCUSED_ITEM, (data: FocusedUser) => {
      if (data.userId !== user?._id) {
        setItemsFocusedOnByOtherUsers((prev) => [...prev, data])
      }
    })

    socket.current.on(EVENTS.LIST_USER_UNFOCUSED_ITEM, (data: FocusedUser) => {
      if (data.userId !== user?._id) {
        setItemsFocusedOnByOtherUsers((prev) => prev.filter((item) => item.itemId !== data.itemId))
      }
    })

    socket.current.on(EVENTS.LIST_ITEM_CREATED, (list: ListResource) => {
      setList(list)
    })

    socket.current.on(EVENTS.LIST_ITEM_UPDATED, (list: ListResource) => {
      setList(list)
    })

    socket.current.on(EVENTS.LIST_DISCONNECTED, (users: RoomUser[]) => {
      setRoomUsers(users)
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
      }
    }
  }, [])

  return {
    list,
    createItem,
    updateItem,
    userFocusedOnItem,
    userUnfocusedOnItem,
    itemsFocusedOnByOtherUsers,
    roomUsers,
  }
}

export default useSocket
