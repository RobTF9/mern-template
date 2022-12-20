import React, { useState } from 'react'
import { ProjectFormWrapper } from './styles'

interface Props {
  create: ({ title, content }: { title: string; content: string }) => void
}

const ProjectForm: React.FC<Props> = ({ create }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  return (
    <ProjectFormWrapper
      onSubmit={(event) => {
        event.preventDefault()
        create({ title, content })
      }}
    >
      <h3>New project</h3>
      <label>
        <p>Title</p>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        <p>Objective</p>
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </label>
      <button type="submit">Add project</button>
    </ProjectFormWrapper>
  )
}

export default ProjectForm
