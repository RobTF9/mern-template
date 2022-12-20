import styled, { css } from 'styled-components'

export interface Grid {
  columns?: string
  breakpoints?: { width: string; columns: string }[]
}

export const GridWrapper = styled.div<Grid>`
  position: relative;
  padding: var(--medium) 0;
  gap: 2rem;
  width: 100%;

  ${({ columns }) =>
    columns &&
    css`
      display: grid;
      grid-template-columns: ${columns};
      gap: var(--medium);
    `}

  ${({ breakpoints }) =>
    breakpoints &&
    breakpoints.map(
      ({ width, columns }) => css`
        @media (max-width: ${width}) {
          grid-template-columns: ${columns};
        }
      `
    )}
`
