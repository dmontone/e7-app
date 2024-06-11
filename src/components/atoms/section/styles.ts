import { device } from 'device.config'
import styled, { Colors } from 'styled-components'

type TWrapper = {
  $bgcolor: Colors
}

export const Wrapper = styled.div<TWrapper>(({ theme, $bgcolor }) => ({
  backgroundColor: theme.colors[$bgcolor],
  padding: '40px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: 40,

  [`@media ${device.tablet}`]: {
    padding: '60px 36px',
  },

  [`@media ${device.desktop}`]: {
    padding: '80px 56px',
  }
}))