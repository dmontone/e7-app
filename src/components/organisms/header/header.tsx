import { Button, Icon, Typography } from 'components/atoms'
import { FC, MouseEvent } from 'react'
import * as S from './styles'
import bgHero from './assets/bg-hero.jpg'
import { Separator } from 'components/atoms/separator'

type THeader = {
  ctaOnClick: (e: MouseEvent) => void
}

export const Header: FC<THeader> = ({ ctaOnClick }) => {
  return (
    <S.Wrapper>
      <S.Hero>
        <S.HeroImage $img={bgHero} />
        <Typography variant='title' level={1} size={16} color={'white'} weight='bold' text={'trabalhe no elo7'} />
      </S.Hero>
      <S.Content>
        <Typography variant='text' size={8} lineHeight={1.5} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et viverra orci. Praesent consequat dolor tellus, eget viverra risus hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque libero eu eros sagittis.'} />
        <Separator />
        <Button onClick={ctaOnClick}>
          vagas em aberto <Icon type='chevron-right' />
        </Button>
      </S.Content>
    </S.Wrapper>
  )
}