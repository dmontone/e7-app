import styled, { Dimensions } from 'styled-components'
import { getSize } from 'utils'

type TWrapper = {
  $width: 'auto' | '100%' | number | [number, number, number]
  $height: 'auto' | '100%' | number | [number, number, number]
  $isLoaded: boolean
}

export const Wrapper = styled.figure<TWrapper>(({ theme, $width, $height, $isLoaded }) => {
  const getWidth = $width === 'auto' ? () => 'auto'
      : $width === '100%' ? () => '100%'
      : getSize($width)

  const getHeight = $height === 'auto' ? () => 'auto'
      : $height === '100%' ? () => '100%'
      : getSize($height)

  return {
    width: getWidth(),
    maxHeight: getHeight(),
    borderRadius: 16,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  }
})