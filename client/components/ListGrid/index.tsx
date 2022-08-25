import React from 'react'
import { Link } from 'react-router-dom'
import { ListGridWrapper } from './styles'

interface Props {
  lists: ListResource[]
  user: UserResource
}

const ListGrid: React.FC<Props> = ({ lists, user }) => {
  return (
    <ListGridWrapper>
      {lists.map(({ name, _id, editors, createdBy }) => (
        <li key={_id}>
          <h3>{name}</h3>
          <p>{`${createdBy}` === user._id ? 'Owner' : 'Editor'}</p>
          <p>
            {editors.length} editor{editors.length === 1 ? '' : 's'}
          </p>
          <Link to={`/${_id}`}>open</Link>
        </li>
      ))}
    </ListGridWrapper>
  )
}

export default ListGrid
