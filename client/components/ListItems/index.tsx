import React, { useEffect, useState } from 'react'
import { ListItemsWrapper } from './styles'

interface Item {
  item: string
  _id: string
}

interface Props {
  items: Item[]
  updateItem: (id: string, update: string) => void
}

const ListItems: React.FC<Props> = ({ items, updateItem }) => {
  return (
    <ListItemsWrapper>
      {items.map(({ item, _id }) => (
        <li key={_id}>
          <Item _id={_id} item={item} updateItem={updateItem} />
        </li>
      ))}
    </ListItemsWrapper>
  )
}

const Item: React.FC<Item & { updateItem: (id: string, update: string) => void }> = (props) => {
  const [item, setItem] = useState(props.item)

  useEffect(() => {
    if (props.item) {
      setItem(props.item)
    }
  }, [props.item])

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault()
        props.updateItem(props._id, item)
      }}
    >
      <input type="text" value={item} onChange={(event) => setItem(event.target.value)} />
    </form>
  )
}

export default ListItems
