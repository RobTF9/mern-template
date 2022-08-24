import React, { createContext, useContext, useState } from 'react'
import useLists from '../hooks/useLists'

interface ListContext {
  lists: ListResource[]
  activeList?: ListResource
  setActive: (list: ListResource) => void
  createList: (name: string) => void
}

const listContext = createContext<ListContext>({
  lists: [],
  setActive: () => null,
  createList: () => null,
})

export const useListContext = (): ListContext => useContext(listContext)

const ListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lists, createList } = useLists()
  const [activeList, setActiveList] = useState<ListResource | undefined>()
  return (
    <listContext.Provider
      value={{
        lists,
        activeList,
        setActive: (list: ListResource) => setActiveList(list),
        createList,
      }}
    >
      {children}
    </listContext.Provider>
  )
}

export default ListProvider
