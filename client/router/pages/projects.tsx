import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '../../components/Grid'
import ProjectList from '../../components/ProjectList'
import useResource from '../../data/useResource'

const Projects = () => {
  const resource = useResource<ProjectResource, ProjectInterface>(
    '/api/project'
  )
  const { items: projects, itemsLoading: projectsLoading } = resource

  return (
    <Grid>
      <h1>Projects</h1>
      <Link to="/new-project">New project</Link>
      <ProjectList projects={projects} itemsLoading={projectsLoading} />
    </Grid>
  )
}

export default Projects
