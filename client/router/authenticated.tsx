import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthContext } from '../context/auth'
import ListProvider from '../context/lists'
import Home from './pages/home'
import List from './pages/list'

const Authenticated = () => {
  const { signOut } = useAuthContext()
  return (
    <ListProvider>
      <div>
        <header>
          <h1>Authenticated</h1>
          <button onClick={signOut}>Sign out</button>
        </header>
        <Routes>
          <Route path="/:id" element={<List />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </ListProvider>
  )
}

export default Authenticated
