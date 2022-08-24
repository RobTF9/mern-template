// create a new socket that cruds items in a room equivalent to a active list id
// push active list to session
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useSocket from '../../hooks/useSocket'

const List = () => {
  const { id } = useParams()
  const { emitter } = useSocket(id || '')
  const [newItem, setNewItem] = useState('')

  return (
    <div>
      <h2>List {id}</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          emitter('create', newItem)
        }}
      >
        <label>
          New item{' '}
          <input type="text" value={newItem} onChange={(event) => setNewItem(event.target.value)} />
        </label>
      </form>
    </div>
  )
}

export default List
