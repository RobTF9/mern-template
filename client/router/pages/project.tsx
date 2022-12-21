import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { get } from '../../data/fetch'

const Project = () => {
  const { id } = useParams()
  const [project, setProject] = useState<ProjectResource | undefined>()
  const [related, setRelated] = useState<RelatedResource | undefined>()

  async function getProject() {
    try {
      const res = await get<ServerResponse<ProjectResource>>(
        `/api/project/${id}`
      )
      if (res.data) {
        setProject(res.data)
      }
      if (res.related) {
        setRelated(res.related)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    console.log('Running...')
    getProject()
  }, [])

  return (
    <div>
      <h1>{project ? project.title : 'Loading....'}</h1>
      {project && <p>{project.content}</p>}
      {related && JSON.stringify(related)}
    </div>
  )
}

export default Project
