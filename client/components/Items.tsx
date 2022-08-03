import React, { useState } from 'react'
import { getItems, createItem } from '../data/itemResource'

const Items: React.FC = () => {
  const [items, getLoading] = getItems()
  const [create, createLoading] = createItem()
  const [newItem, setNewItem] = useState('')

  if (getLoading || createLoading) return <h1>Loading...</h1>

  return (
    <main>
      <ul>{items?.data && items.data.map(({ item }) => <li key={item}>{item}</li>)}</ul>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          create({ item: newItem })
        }}
      >
        <label>
          Add item
          <input value={newItem} onChange={(event) => setNewItem(event.target.value)} />
        </label>
        <button type="submit">Add</button>
      </form>
    </main>
  )
}

export default Items
