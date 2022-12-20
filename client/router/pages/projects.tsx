import React from 'react'
import ProjectList from '../../components/ProjectList'
import useResource from '../../data/useResource'

const Projects = () => {
  const resource = useResource<ProjectResource, ProjectInterface>(
    '/api/project'
  )
  const { items: projects, itemsLoading: projectsLoading } = resource

  return <ProjectList projects={projects} itemsLoading={projectsLoading} />
}

export default Projects
