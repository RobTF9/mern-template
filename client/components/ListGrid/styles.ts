import styled from 'styled-components'

export const ListGridWrapper = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;

  li {
    padding: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  }
`
