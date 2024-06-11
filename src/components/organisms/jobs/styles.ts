import { device } from 'device.config'
import styled, { css } from 'styled-components'

export const Header = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  [`@media ${device.tablet}`]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}))

export const Content = styled.div<{ $centralize: boolean }>(({ $centralize }) => {
  const centralize = $centralize ? {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } : {}

  return {
    minHeight: 320,
    ...centralize,

    [`@media ${device.tablet}`]: {
      minHeight: 200,
    }
  }
})