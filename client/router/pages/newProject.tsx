import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useResource from '../../data/useResource'

const NewProject = () => {
  const resource = useResource<ProjectResource, ProjectInterface>(
    '/api/project'
  )
  const { create, createLoading } = resource

  const [project, setProject] = useState<ProjectInterface>({
    title: '',
    content: '',
  })

  const navigate = useNavigate()

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        create(project, {
          onSuccess: (r) => {
            navigate(`/${r.data?._id}`)
          },
        })
      }}
    >
      <h1>New project</h1>
      <label>
        What is the title of your project?
        <input
          type="text"
          value={project.title}
          placeholder="Eg. Research project task analysis"
          onChange={(event) =>
            setProject((p) => ({ ...p, title: event.target.value }))
          }
        />
      </label>
      <label>
        What is the objective of your project?
        <textarea
          value={project.content}
          placeholder="Eg. To better understand the workflows and tools a research team uses when analysing and synthesising the findings of their research."
          onChange={(event) =>
            setProject((p) => ({ ...p, content: event.target.value }))
          }
        />
      </label>
      <button type="submit" disabled={createLoading}>
        {createLoading ? 'Loading...' : 'Create project'}
      </button>
    </form>
  )
}

export default NewProject
