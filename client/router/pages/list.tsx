// create a new socket that cruds items in a room equivalent to a active list id
// push active list to session
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ListItems from '../../components/ListItems'
import useSocket from '../../hooks/useSocket'

const List = () => {
  const { id } = useParams()
  const { list, emitter, updateItem } = useSocket(id || '')
  const [item, setItem] = useState('')

  // emmiter when edit is focused

  return (
    list && (
      <div>
        <h2>{list.name}</h2>
        <form
          onSubmit={async (event) => {
            event.preventDefault()
            emitter('create item', { item })
          }}
        >
          <label>
            New item{' '}
            <input type="text" value={item} onChange={(event) => setItem(event.target.value)} />
          </label>
        </form>
        {list && <ListItems items={list.items} updateItem={updateItem} />}
      </div>
    )
  )
}

export default List
