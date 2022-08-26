import React, { useEffect, useState } from 'react'
import { ListItemsWrapper } from './styles'

interface Item {
  item: string
  _id: string
}

interface ItemEmitters {
  updateItem: (id: string, update: string) => void
  userFocusedOnItem: (itemId: string) => void
  userUnfocusedOnItem: (itemId: string) => void
}

interface Props extends ItemEmitters {
  items: Item[]
}

const ListItems: React.FC<Props> = ({
  items,
  updateItem,
  userFocusedOnItem,
  userUnfocusedOnItem,
}) => {
  return (
    <ListItemsWrapper>
      {items.map(({ item, _id }) => (
        <li key={_id}>
          <Item
            _id={_id}
            item={item}
            updateItem={updateItem}
            userFocusedOnItem={userFocusedOnItem}
            userUnfocusedOnItem={userUnfocusedOnItem}
          />
        </li>
      ))}
    </ListItemsWrapper>
  )
}

const Item: React.FC<Item & ItemEmitters> = (props) => {
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
      <input
        onFocus={() => props.userFocusedOnItem(props._id)}
        onBlur={() => props.userUnfocusedOnItem(props._id)}
        type="text"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
    </form>
  )
}

export default ListItems
