import styled from 'styled-components'

export const Wrapper = styled.section`
  background: ${({theme }) => theme.colors.lightYellow};
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`