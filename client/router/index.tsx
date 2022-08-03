import React from 'react'
import { useAuthContext } from '../context/auth'
import Authenticated from './authenticated'
import NotAuthenticated from './notAuthenticated'

const Router = () => {
  const { authenticated } = useAuthContext()
  return authenticated ? <Authenticated /> : <NotAuthenticated />
}

export default Router
