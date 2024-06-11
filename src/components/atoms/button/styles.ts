import styled from 'styled-components'

export const Wrapper = styled.div(({ theme }) => ({
  fontFamily: theme.text.font,
  fontWeight: theme.text.weight.semibold,
  fontSize: 20,
  lineHeight: 24,
  color: theme.colors.cyan,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 26,
  width: '100%',
  height: 48,
}))