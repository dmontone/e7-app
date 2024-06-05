import { FC } from 'react'
import { Wrapper } from './styles'
import { DefaultTheme } from 'styled-components'

export type TTypography = {
  children: string,
  variant?: DefaultTheme['text']['variants']
}

export const Typography: FC<TTypography> = ({ children, ...props }) => {
  return (<Wrapper {...props}>Text: { children }</Wrapper>)
}