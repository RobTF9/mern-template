import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '../../components/Grid'
import ProjectList from '../../components/ProjectList'
import { getProjects } from '../../data/projectResource'

const Projects = () => {
  const [projects, projectsLoading] = getProjects()

  return (
    <Grid>
      <h1>Projects</h1>
      <Link to="/new-project">New project</Link>
      <ProjectList projects={projects} itemsLoading={projectsLoading} />
    </Grid>
  )
}

export default Projects
