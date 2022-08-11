import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { io } from 'socket.io-client'
import { useAuthContext } from '../context/auth'
import QueryContext from '../context/query'
import Items from './pages/items'

const socket = io()

const Authenticated = () => {
  const { signOut } = useAuthContext()

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connect')
    })

    socket.on('disconnect', () => {
      console.log('disconnected')
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
    }
  }, [])
  return (
    <QueryContext>
      <div>
        <header>
          <h1>Authenticated</h1>
          <button onClick={signOut}>Sign out</button>
        </header>
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </QueryContext>
  )
}

export default Authenticated
