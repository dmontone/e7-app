import { FC } from 'react'
import { Colors, Weights } from 'styled-components'
import * as S from './styles'
import { mapToDollar } from 'utils'

export type TTypography = {
  text: string
  variant?: 'title' | 'text'
  level?: 1 | 2 | 3
  size?: 8 | 10 | 12 | 14 | 16
  weight?: Weights
  color?: Colors
  lineHeight?: number
}

export const Typography: FC<TTypography> = ({ text, ...props }) =>
  <S.Wrapper {...mapToDollar(props)}>
    {text}
  </S.Wrapper>