import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getEvidences } from '../../data/resources/evidence'
import { getProject } from '../../data/resources/project'

const Project = () => {
  const { id } = useParams()
  const [project, projectLoading] = getProject(id || '')
  const [evidences] = getEvidences(`project=${id}`)

  useEffect(() => {
    console.log(project)
  }, [project])

  if (projectLoading) return <h1>Loading...</h1>

  return (
    <div>
      {project && (
        <>
          <h1>{project.data.title}</h1>
          <p>{project.data.content}</p>
        </>
      )}
      {evidences &&
        evidences.data.map((e) => (
          <div key={`${e._id}`}>
            <video controls>
              <source src={e.video} type="video/mp4" />
            </video>
            <h2>{e.source.participant}</h2>
          </div>
        ))}
    </div>
  )
}

export default Project
