// create a new socket that cruds items in a room equivalent to a active list id
// push active list to session
import React from 'react'
import { useParams } from 'react-router-dom'
import useSocket from '../../hooks/useSocket'

const List = () => {
  const { id } = useParams()
  const { emitter } = useSocket(id || '')

  return <div>List</div>
}

export default List
