import { FC } from 'react'
import { Wrapper } from './styles'
import { tokenWeights } from '../../../../types/theme'

export type TTypography = {
  text: string
  variant?: 'title' | 'text'
  level?: 1 | 2 | 3
  size?: 8 | 10 | 12 | 14 | 16
  weight?: tokenWeights
}

export const Typography: FC<TTypography> = ({ text, ...props }) =>
  <Wrapper {...props}>
    {text}
  </Wrapper>