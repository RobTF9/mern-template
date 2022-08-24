// create a new socket that cruds items in a room equivalent to a active list id
// push active list to session
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get, post } from '../../data/fetch'
import useSocket from '../../hooks/useSocket'

const List = () => {
  const { id } = useParams()
  const [items, setItems] = useState<ItemResource[]>([])

  useSocket<ItemResource>(id || '', [['create item', (d) => setItems((s) => [d, ...s])]])
  const [newItem, setNewItem] = useState('')

  async function getItems() {
    const response = await get<ItemResource[]>('/api/item')
    if (response.data) {
      setItems(response.data)
    }
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div>
      <h2>List {id}</h2>
      <form
        onSubmit={async (event) => {
          event.preventDefault()
          await post<{ item: string; list: string }, ItemResource>('/api/item', {
            item: newItem,
            list: id || '',
          })
        }}
      >
        <label>
          New item{' '}
          <input type="text" value={newItem} onChange={(event) => setNewItem(event.target.value)} />
        </label>
        <ul>
          {items.map(({ item, _id }) => (
            <li key={_id}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default List
