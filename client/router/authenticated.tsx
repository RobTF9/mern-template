import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthContext } from '../context/auth'
import Home from './pages/home'

const Authenticated = () => {
  const { signOut } = useAuthContext()
  return (
    <>
      <div>
        <header>
          <h1>Authenticated</h1>
          <button onClick={signOut}>Sign out</button>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  )
}

export default Authenticated
