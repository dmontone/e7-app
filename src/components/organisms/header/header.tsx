import { Button, Icon, Typography } from 'components/atoms'
import { FC } from 'react'
import * as S from './styles'

type THeader = {
  title: string
  text: string
}

export const Header: FC<THeader> = ({ title, text }) => {
  return (
    <S.Wrapper>
      <S.Hero>
        <Typography variant='title' level={1} size={16} text={title} color={'white'} weight='bold' />
      </S.Hero>
      <Typography variant='text' size={8} text={text} />
      
      <Button onClick={console.log}>
        vagas em aberto <Icon type='chevron-right' />
      </Button>
    </S.Wrapper>
  )
}