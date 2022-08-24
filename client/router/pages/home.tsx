import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useListContext } from '../../context/lists'

const Home = () => {
  const { lists, createList } = useListContext()
  const [newList, setNewList] = useState('')

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          createList(newList)
        }}
      >
        <label>
          New list
          <input value={newList} onChange={(event) => setNewList(event.target.value)} />
        </label>
      </form>
      <ul>
        {lists.map(({ name, _id }) => (
          <li key={_id}>
            <Link to={`/${_id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
