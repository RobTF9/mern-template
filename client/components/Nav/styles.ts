import styled from 'styled-components'

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;

    p {
      margin-right: 1rem;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 2rem;
  }
`
