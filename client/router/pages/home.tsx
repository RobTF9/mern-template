import React, { useState } from 'react'
import ListGrid from '../../components/ListGrid'
import { useAuthContext } from '../../context/auth'
import { useListContext } from '../../context/lists'

const Home = () => {
  const { lists, createList } = useListContext()
  const { user } = useAuthContext()
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
          <input name="list" value={newList} onChange={(event) => setNewList(event.target.value)} />
        </label>
      </form>
      {user && <ListGrid lists={lists} user={user} />}
    </div>
  )
}

export default Home
