import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavWrapper } from './styles'

interface Props {
  user: UserInterface
  signOut: () => void
}

const Nav = ({ user, signOut }: Props) => {
  return (
    <NavWrapper>
      <h1>Basis</h1>
      <ul>
        <li>
          <NavLink to="/">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/assumptions">Assumptions</NavLink>
        </li>
      </ul>
      <div>
        <p>Signed in as {user.username}</p>
        <button onClick={signOut}>Sign out</button>
      </div>
    </NavWrapper>
  )
}

export default Nav
