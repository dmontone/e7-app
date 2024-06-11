import { device } from 'device.config'
import styled from 'styled-components'

export const Wrapper = styled.ul(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  [`@media ${device.tablet}`]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    '> li': {
      flexBasis: 'calc(50% - 12px)',
    },
  },

  [`@media ${device.desktop}`]: {
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
}))

export const Item = styled.li``