import { device } from 'device.config'
import styled, { Colors } from 'styled-components'

export const Wrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,

  [`@media ${device.tablet}`]: {
    flexDirection: 'row',
    ['> :nth-child(1)']: {
      minWidth: 390
    }
  },

  [`@media ${device.desktop}`]: {
    flexDirection: 'row',
    ['> :nth-child(1)']: {
      minWidth: 644
    }
  },
}))