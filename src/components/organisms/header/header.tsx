import { Button, Icon, Separator, Typography } from 'components/atoms'
import { FC, MouseEvent, useState } from 'react'
import * as S from './styles'
import bgHero from './assets/bg-hero.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

type THeader = {
  ctaOnClick: (e: MouseEvent) => void
}

export const Header: FC<THeader> = ({ ctaOnClick }) => {
  const [ isImageLoaded, setImageLoaded ] = useState<boolean>(false)

  return (
    <S.Wrapper>
      <S.Hero>
        <S.HeroImage isVisible={isImageLoaded}>
          <LazyLoadImage src={bgHero} alt={'Lorem ipsum'} onLoad={() => setImageLoaded(true)} />
        </S.HeroImage>
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