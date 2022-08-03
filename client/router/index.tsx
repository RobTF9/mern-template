import React from 'react'
import Layout from '../components/Layout'
import { useAuthContext } from '../context/auth'
import Authenticated from './authenticated'
import NotAuthenticated from './notAuthenticated'

const Router = () => {
  const { authenticated } = useAuthContext()
  return <Layout>{authenticated ? <Authenticated /> : <NotAuthenticated />}</Layout>
}

export default Router
