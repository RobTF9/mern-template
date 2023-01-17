import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import { useAuthContext } from '../context/auth'
import QueryContext from '../context/query'
import Assumptions from './pages/assumptions'
import NewProject from './pages/newProject'
import Project from './pages/project'
import Projects from './pages/projects'

const Authenticated = () => {
  const { signOut, user } = useAuthContext()
  return (
    <QueryContext>
      <div>
        {user && <Nav user={user} signOut={signOut} />}
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/new-project" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/assumptions" element={<Assumptions />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </QueryContext>
  )
}

export default Authenticated
