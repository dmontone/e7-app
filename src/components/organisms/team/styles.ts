import styled from 'styled-components'

export const Wrapper = styled.section`
  background: ${({theme }) => theme.colors.white};
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const MemberList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Member = styled.li`

`