import { Button, Icon, Typography } from 'components/atoms'
import { FC } from 'react'
import * as S from './styles'
import bgHero from './assets/bg-hero.jpg'
import { Separator } from 'components/atoms/separator'

type THeader = {
  title: string
  text: string
}

export const Header: FC<THeader> = ({ title, text }) => {
  return (
    <S.Wrapper>
      <S.Hero>
        <S.HeroImage img={bgHero} />
        <Typography variant='title' level={1} size={16} text={title} color={'white'} weight='bold' />
      </S.Hero>
      <S.Content>
        <Typography variant='text' size={8} lineHeight={1.5} text={text} />
        <Separator />
        <Button onClick={console.log}>
          vagas em aberto <Icon type='chevron-right' />
        </Button>
      </S.Content>
    </S.Wrapper>
  )
}