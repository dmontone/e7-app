import { FC } from 'react'
import { Dimensions } from 'styled-components'
import * as S from './styles'

type TPhoto = {
  src: string
  alt: string
  width?: Dimensions
  height?: Dimensions
}

export const Photo: FC<TPhoto> = ({ alt, src, width = 'auto', height = 'auto' }) => {
  return (
    <S.Wrapper width={width} height={height}>
      <img alt={alt} src={src} />
    </S.Wrapper>
  )
}