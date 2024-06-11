import { FC } from 'react'
import { Colors, Weights } from 'styled-components'
import * as S from './styles'
import { mapToDollar } from 'utils'

export type TTypography = {
  text: string
  variant?: 'title' | 'text'
  level?: 1 | 2 | 3
  size?: number | [number, number, number]
  weight?: Weights
  color?: Colors
  lineHeight?: number | [number, number, number]
  subtitle?: string
  margin?: number
  align?: 'center'
}

export const Typography: FC<TTypography> = ({ text, subtitle, margin, ...props }) =>
  <S.Wrapper $margin={margin}>
    <S.Content {...mapToDollar(props)}>{text}</S.Content>
    {props.variant === 'title' && subtitle && <S.Subtitle $size={props.size}>{subtitle}</S.Subtitle>}
  </S.Wrapper>