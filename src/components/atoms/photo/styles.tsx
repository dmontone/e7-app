import styled, { Dimensions } from 'styled-components'

type TWrapper = {
  $width: Dimensions
  $height: Dimensions
  $isLoaded: boolean
}

export const Wrapper = styled.figure<TWrapper>(({ theme, $width, $height, $isLoaded }) => ({
  borderRadius: 16,
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: $width,
  height: $height,
  color: theme.colors.gray,

  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
    opacity: +$isLoaded,
    transition: 'opacity 0.5s ease-in-out',
  }
}))