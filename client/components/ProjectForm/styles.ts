import styled from 'styled-components'

export const ProjectFormWrapper = styled.form`
  width: 100%;
  padding: 2rem 2rem 0 0;

  button {
    background-color: var(--success);
  }

  label {
    flex-grow: 1;
    align-items: center;

    input,
    textarea {
      width: 100%;
    }
  }
`
