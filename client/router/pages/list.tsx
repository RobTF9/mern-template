import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ListItems from '../../components/ListItems'
import useSocket from '../../hooks/useSocket'

const List = () => {
  const { id } = useParams()
  const {
    list,
    createItem,
    updateItem,
    userFocusedOnItem,
    userUnfocusedOnItem,
    itemsFocusedOnByOtherUsers,
  } = useSocket(id || '')
  const [item, setItem] = useState('')

  return (
    list && (
      <div>
        <h2>{list.name}</h2>
        <form
          onSubmit={async (event) => {
            event.preventDefault()
            createItem(item)
          }}
        >
          <label>
            New item{' '}
            <input type="text" value={item} onChange={(event) => setItem(event.target.value)} />
          </label>
        </form>
        {list && (
          <ListItems
            items={list.items}
            updateItem={updateItem}
            userFocusedOnItem={userFocusedOnItem}
            userUnfocusedOnItem={userUnfocusedOnItem}
            itemsFocusedOnByOtherUsers={itemsFocusedOnByOtherUsers}
          />
        )}
      </div>
    )
  )
}

export default List
