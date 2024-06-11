import { device } from 'device.config'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div(() => ({
  [`@media ${device.desktop}`]: {
    maxWidth: 340,
  }
}))