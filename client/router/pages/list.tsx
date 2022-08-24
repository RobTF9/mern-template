// create a new socket that cruds items in a room equivalent to a active list id
// push active list to session
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { post } from '../../data/fetch'
import useSocket from '../../hooks/useSocket'

const List = () => {
  const { id } = useParams()
  const [items, setItems] = useState<ItemInterface[]>([])

  const { emitter } = useSocket<ItemInterface>(id || '', [
    ['create item', (d) => setItems([d, ...items])],
  ])
  const [newItem, setNewItem] = useState('')

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
          {items.map(({ item }) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default List
