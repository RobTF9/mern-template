import React from 'react'
import useSocket from '../../hooks/useSocket'

const emitters = ['update', 'read', 'create', 'delete']

const Home = () => {
  const { emitter } = useSocket()
  return (
    <div>
      <h2>Home</h2>
      {emitters.map((e) => (
        <button key={e} onClick={() => emitter(e, 'data')}>
          Emit {e}
        </button>
      ))}
    </div>
  )
}

export default Home
