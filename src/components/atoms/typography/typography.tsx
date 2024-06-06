import { FC } from 'react'
import { DefaultTheme } from 'styled-components'
import { Body, Heading, Subtitle, Title } from './styles'

export type TTypography = {
  children: string,
  variant: DefaultTheme['text']['variants']
}

export const Typography: FC<TTypography> = ({ children, variant }) => {
  const Component =
    (variant === 'title' && Title)
    || (variant === 'subtitle' && Subtitle)
    || (variant === 'heading' && Heading)
    || Body

  return (<Component>{ children }</Component>)
}