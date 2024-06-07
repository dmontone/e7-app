import { FC } from 'react'
import * as S from './styles'
import { Header, Team } from 'components/organisms'
import { Testimonial } from 'components/organisms/testimonial/testimonial'

export const LandingPage: FC = () => {
  return (
    <S.Wrapper>
      <Header ctaOnClick={console.log} />
      <main>
        <Testimonial />
        <Team />

        {/* <div> Figure </div> */}

        {/* Section: Jobs */}
        {/* <section>
          <Typography variant='title' level={2} size={16} weight='semibold' text={'Vagas em aberto'} />
        </section> */}
      </main>
    </S.Wrapper>
  )
}