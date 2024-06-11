import { device } from 'device.config'
import styled from 'styled-components'

export const Wrapper = styled.article(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 24,

  [`@media ${device.desktop}`]: {
    width: 430
  }
}))

export const Illustration = styled.figure(({ theme }) => ({
  width: 200,
  height: 200,
  borderRadius: '100%',
  backgroundColor: theme.colors.darkYellow,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))