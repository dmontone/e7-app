import { device } from 'device.config'
import styled from 'styled-components'

type TWrapper = {
  $isVisible: boolean
}

export const Wrapper = styled.div<TWrapper>(({ theme, $isVisible }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 260,
  backgroundColor: theme.colors.lightGray,

  [`@media ${device.desktop}`]: {
    height: 385
  },
  
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    opacity: +$isVisible,
    transition: 'opacity 1s ease-out'
  }
}))