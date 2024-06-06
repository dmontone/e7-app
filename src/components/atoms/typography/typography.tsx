import { FC } from 'react'
import { Wrapper } from './styles'
import { Colors, Weights } from 'styled-components'

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
  <Wrapper {...props}>
    {text}
  </Wrapper>