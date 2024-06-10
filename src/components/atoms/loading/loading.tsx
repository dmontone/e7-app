import { FC } from 'react'
import { Icon } from 'components/atoms' 
import * as S from './styles'

export const Loading: FC = () => {
  return (
    <S.Wrapper>
      <Icon type='spinner' size={2} />
    </S.Wrapper>
  )
}