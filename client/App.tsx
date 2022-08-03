import React from 'react'
import Items from './components/Items'
import QueryContext from './context/query'

const App = () => {
  return (
    <QueryContext>
      <Items />
    </QueryContext>
  )
}

export default App
