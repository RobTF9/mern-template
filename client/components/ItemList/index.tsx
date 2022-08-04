import React from 'react'
import { ItemListWrapper } from './styles'

interface Props {
  items?: { data?: ItemResource[] }
  itemsLoading?: boolean
  del: (id: string) => void
}

const ItemList: React.FC<Props> = ({ items, itemsLoading, del }) => {
  return itemsLoading ? (
    <h2>Items loading...</h2>
  ) : (
    <ItemListWrapper>
      {items &&
        items.data &&
        items.data.map((item) => (
          <li key={item._id}>
            <h3>{item.item}</h3>
            <button onClick={() => del(item._id)}>Delete</button>
          </li>
        ))}
    </ItemListWrapper>
  )
}

export default ItemList
