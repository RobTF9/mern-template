import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAuthContext } from '../context/auth'
import Authenticated from './authenticated'
import NotAuthenticated from './notAuthenticated'

const Router = () => {
  const { authenticated } = useAuthContext()
  return <BrowserRouter>{authenticated ? <Authenticated /> : <NotAuthenticated />}</BrowserRouter>
}

export default Router
