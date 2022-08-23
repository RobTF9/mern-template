import React, { useState } from 'react'
import useLists from '../../hooks/useLists'
import useSocket from '../../hooks/useSocket'

const emitters = ['update', 'read', 'create', 'delete']

const Home = () => {
  const { emitter } = useSocket()
  const { lists, createList } = useLists()
  const [newList, setNewList] = useState('')

  return (
    <div>
      <h2>Home</h2>
      <div>
        {emitters.map((e) => (
          <button key={e} onClick={() => emitter(e, 'data')}>
            Emit {e}
          </button>
        ))}
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          createList(newList)
        }}
      >
        <input value={newList} onChange={(event) => setNewList(event.target.value)} />
      </form>
      <ul>
        {lists.map(({ name, _id }) => (
          <li key={_id}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
