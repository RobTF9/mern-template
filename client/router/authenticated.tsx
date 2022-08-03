import React from 'react'
import { useAuthContext } from '../context/auth'

const Authenticated = () => {
  const { signOut } = useAuthContext()
  return (
    <div>
      <h1>Authenticated</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  )
}

export default Authenticated
