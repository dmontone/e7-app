import { FC, MouseEvent, ReactNode } from 'react'
import { Wrapper } from './styles'

type TButton = {
  children: ReactNode,
  onClick: (event: MouseEvent) => void
}

export const Button: FC<TButton> = ({ children, onClick }) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>
}