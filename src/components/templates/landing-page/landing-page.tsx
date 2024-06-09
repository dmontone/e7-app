import { FC } from 'react'
import * as S from './styles'
import { Features, Header, Jobs, Team, Testimonial } from 'components/organisms'
import { Filler } from 'components/atoms'

export const LandingPage: FC = () => {
  return (
    <S.Wrapper>
      <Header ctaOnClick={console.log} />
      <main>
        <Testimonial />
        <Team />
        <Features />
        <Filler />
        <Jobs />
      </main>
    </S.Wrapper>
  )
}