import styled, { css } from 'styled-components'

export const Header = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
}))

export const Content = styled.div<{ $centralize: boolean }>(({ $centralize }) => {
  const centralize = $centralize ? {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } : {}

  return {
    minHeight: 320,
    ...centralize
  }
})