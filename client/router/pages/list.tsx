// create a new socket that cruds items in a room equivalent to a active list id
// push active list to session
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useSocket from '../../hooks/useSocket'

const List = () => {
  const { id } = useParams()

  const { list, emitter } = useSocket(id || '')
  const [item, setItem] = useState('')

  return (
    <div>
      <h2>List {id}</h2>
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
        <ul>{list && list.items.map(({ item }) => <li key={item}>{item}</li>)}</ul>
      </form>
    </div>
  )
}

export default List
