import { device } from 'device.config'
import styled from 'styled-components'

export const Wrapper = styled.header`
  height: auto;
`

export const Hero = styled.div(() => ({
  width: '100%',
  height: 260,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  [`@media ${device.tablet}`]: {
    height: 380
  },

  [`@media ${device.desktop}`]: {
    height: 500
  },

  '*': {
    zIndex: 2
  }
}))

export const HeroImage = styled.div<{ $isVisible: boolean }>(({ theme, $isVisible }) => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 260,
  background: theme.colors.black,
  opacity: +$isVisible,

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    opacity: 0.7,
  },

  [`@media ${device.tablet}`]: {
    height: 380
  },

  [`@media ${device.desktop}`]: {
    height: 500
  },
}))

export const Content = styled.div(() => ({
  padding: '32px 16px 40px 16px',
  textAlign: 'center',

  [`@media ${device.tablet}`]: {
    margin: '0 12px'
  },

  [`@media ${device.desktop}`]: {
    margin: '0 40px'
  },
}))
