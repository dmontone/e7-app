import styled from 'styled-components'

export const Wrapper = styled.figure`
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
  }
`