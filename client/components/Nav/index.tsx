import React from 'react'
import { NavWrapper } from './styles'

interface Props {
  user: UserInterface
  signOut: () => void
}

const Nav = ({ user, signOut }: Props) => {
  return (
    <NavWrapper>
      <h1>Hi, {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </NavWrapper>
  )
}

export default Nav
