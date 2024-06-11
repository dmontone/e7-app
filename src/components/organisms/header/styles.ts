import styled from 'styled-components'

export const Wrapper = styled.header``

export const Hero = styled.div(() => ({
  width: '100%',
  height: 260,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

  ['& > *']: { zIndex: 2 }
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
  transition: 'opacity 1s ease-out',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    opacity: 0.7,
  }
}))

export const Content = styled.div(() => ({
  padding: '32px 16px 40px 16px',
  textAlign: 'center',
}))
