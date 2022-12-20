import React from 'react'
import { GridWrapper, Grid } from './styles'

interface Props {
  children: React.ReactNode
  grid?: Grid
}

const Grid = ({ children, grid }: Props) => {
  return <GridWrapper {...{ ...grid }}>{children}</GridWrapper>
}

export default Grid
