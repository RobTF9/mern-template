import React from 'react'
import ProjectForm from '../../components/ProjectForm'
import ProjectList from '../../components/ProjectList'
import useResource from '../../data/useResource'

const Items = () => {
  const resource = useResource<ProjectResource, ProjectInterface>(
    '/api/project'
  )
  const { items, itemsLoading, create, createLoading } = resource

  if (itemsLoading || createLoading) return <h1>Loading...</h1>

  return (
    <div>
      <ProjectForm create={create} />
      <ProjectList projects={items} itemsLoading={itemsLoading} />
    </div>
  )
}

export default Items
