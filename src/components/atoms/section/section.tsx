import { FC, ReactNode } from 'react'
import { Colors } from 'styled-components'
import * as S from './styles'

type TSection = {
  children: ReactNode
  bgColor: Colors
}

export const Section: FC<TSection> = ({ children, bgColor }) => {
  return <S.Wrapper $bgcolor={bgColor}>{children}</S.Wrapper>
}