import styled from 'styled-components'

export const Wrapper = styled.section(({ theme }) => ({
  background: theme.colors.white,
  padding: '40px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
}))

export const MemberList = styled.ul(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24
}))

export const Member = styled.li``