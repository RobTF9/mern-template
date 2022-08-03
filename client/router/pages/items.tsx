import React, { useState } from 'react'
import ItemForm from '../../components/ItemForm'
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
      <ItemForm create={create} />
      <ItemList items={items} itemsLoading={itemsLoading} />
    </div>
  )
}

export default Items
