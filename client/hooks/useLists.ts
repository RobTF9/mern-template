import { useEffect, useState } from 'react'
import { useMessageContext } from '../context/message'
import { get, post } from '../data/fetch'

function useLists() {
  const { showMessage } = useMessageContext()
  const [lists, setLists] = useState<ListResource[]>([])

  async function getLists() {
    const response = await get<ListResource[]>('/api/list')
    if (response.data) {
      setLists(response.data)
    }
    if (response.message) {
      showMessage(response.message)
    }
  }

  async function createList(name: string) {
    const response = await post<{ name: string; lists: string[] }, ListResource>('/api/list', {
      name,
      lists: [],
    })
    if (response.data) {
      setLists([response.data, ...lists])
    }
    if (response.message) {
      showMessage(response.message)
    }
  }

  useEffect(() => {
    getLists()
  }, [])

  return { getLists, createList, lists }
}

export default useLists
