import { FC } from 'react'
import { Dimensions } from 'styled-components'
import * as S from './styles'

type TPhoto = {
  src: string
  alt: string
  width: Dimensions
  height: Dimensions
}

export const Photo: FC<TPhoto> = ({ alt, ...props }) => {
  return (
    <S.Wrapper>
      <img alt={alt} {...props} />
    </S.Wrapper>
  )
}