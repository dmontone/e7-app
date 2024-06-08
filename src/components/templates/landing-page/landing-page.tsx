import { FC } from 'react'
import * as S from './styles'
import { Features, Header, Team, Testimonial } from 'components/organisms'

export const LandingPage: FC = () => {
  return (
    <S.Wrapper>
      <Header ctaOnClick={console.log} />
      <main>
        <Testimonial />
        <Team />
        <Features />


        {/* <div> Figure </div> */}

        {/* Section: Jobs */}
        {/* <section>
          <Typography variant='title' level={2} size={16} weight='semibold' text={'Vagas em aberto'} />
        </section> */}
      </main>
    </S.Wrapper>
  )
}