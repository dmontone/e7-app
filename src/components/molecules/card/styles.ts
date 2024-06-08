import styled from 'styled-components'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

export const Illustration = styled.figure`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.darkYellow};
  display: flex;
  justify-content: center;
  align-items: center;
`