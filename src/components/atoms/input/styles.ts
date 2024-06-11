import styled from 'styled-components'

export const Wrapper = styled.div(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.colors.gray,
  borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  height: 48,
  display: 'flex',
}))

export const InputElement = styled.input(({ theme }) => ({
  fontFamily: theme.text.font,
  fontWeight: theme.text.weight.semibold,
  fontSize: 16,
  lineHeight: 20,
  color: theme.colors.darkGray,
  width: '100%',
  height: '100%',
  border: 0,
  padding: '0 12px',
}))

export const Icon = styled.div(() => ({
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))