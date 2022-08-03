import React, { useState } from 'react'
import ItemList from '../../components/ItemList'
import { createItem, getItems, updateItem } from '../../data/itemResource'

const Items = () => {
  const [items, itemsLoading] = getItems()
  const [update, updateLoading] = updateItem()
  const [create, createLoading] = createItem()
  const [item, setItem] = useState('')

  if (itemsLoading || updateLoading || createLoading) return <h1>Loading...</h1>

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          create({ item })
        }}
      >
        <label>
          New item: <input value={item} onChange={(event) => setItem(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <ItemList items={items} itemsLoading={itemsLoading} />
    </div>
  )
}

export default Items
