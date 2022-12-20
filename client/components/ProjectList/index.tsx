import React from 'react'
import { ProjectListWrapper } from './styles'

interface Props {
  projects?: { data?: ProjectResource[] }
  itemsLoading?: boolean
}

const ProjectList: React.FC<Props> = ({ projects, itemsLoading }) => {
  return itemsLoading ? (
    <h2>Items loading...</h2>
  ) : (
    <ProjectListWrapper>
      {projects &&
        projects.data &&
        projects.data.map((project) => (
          <li key={`${project._id}`}>
            <strong>{project.title}</strong>
            <p>{project.content}</p>
          </li>
        ))}
    </ProjectListWrapper>
  )
}

export default ProjectList
