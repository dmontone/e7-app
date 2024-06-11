import { device } from 'device.config'
import styled from 'styled-components'

export const Wrapper = styled.div``

export const List = styled.ul``

export const Item = styled.li(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,

  [`@media ${device.tablet}`]: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}))