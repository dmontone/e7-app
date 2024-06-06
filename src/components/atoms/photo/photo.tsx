import { FC } from 'react'
import { Dimensions } from 'styled-components'
import * as S from './styles'

type TPhoto = {
  src: string
  alt: string
  width: Dimensions
  height: Dimensions
}

export const Photo: FC<TPhoto> = props => {
  return (
    <S.Wrapper>
      <img {...props} />
    </S.Wrapper>
  )
}