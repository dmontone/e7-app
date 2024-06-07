import styled from 'styled-components'

export const Wrapper = styled.section`
  background: ${({theme }) => theme.colors.lightGray};
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`