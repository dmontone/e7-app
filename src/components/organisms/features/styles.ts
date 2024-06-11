import { device } from 'device.config'
import styled from 'styled-components'

export const Wrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 40,

  [`@media ${device.desktop}`]: {
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'space-between'
  }
}))