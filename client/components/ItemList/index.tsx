import React from 'react'
import { ItemListWrapper } from './styles'

interface Props {
  items?: { data?: ItemResource[] }
  itemsLoading?: boolean
}

const ItemList: React.FC<Props> = ({ items, itemsLoading }) => {
  return itemsLoading ? (
    <h2>Items loading...</h2>
  ) : (
    <ItemListWrapper>
      {items &&
        items.data &&
        items.data.map((item) => (
          <li key={item._id}>
            <h3>{item.item}</h3>
          </li>
        ))}
    </ItemListWrapper>
  )
}

export default ItemList
