import React from 'react'
import ItemList from '../../components/ItemList'
import { createItem, getItems, updateItem } from '../../data/itemResource'

const Items = () => {
  const [items, itemsLoading] = getItems()
  const [update, updateLoading] = updateItem()
  const [create, createLoading] = createItem()

  if (itemsLoading || updateLoading || createLoading) return <h1>Loading...</h1>

  return (
    <div>
      <ItemList items={items} itemsLoading={itemsLoading} />
    </div>
  )
}

export default Items
