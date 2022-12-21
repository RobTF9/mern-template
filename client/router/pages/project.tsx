import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Project = () => {
  const { id } = useParams()
  const { state } = useLocation()
  return (
    <div>
      <h1>{id}</h1>
      {state && state.related && (
        <ul>
          {state.related.observations.map((o: ObservationResource) => (
            <li key={`${o._id}`}>{o.content}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Project
