import { FC } from 'react'
import * as S from './styles'
import { Typography } from 'components/atoms'
import { Header } from 'components/organisms'
import { Testimonial } from 'components/organisms/testimonial/testimonial'

type TLandingPage = {
  header: {
    title: string,
    text: string,
    cta: string,
  }
}

export const LandingPage: FC<TLandingPage> = ({ header }) => {
  return (
    <S.Wrapper>
      <Header {...header} />
      <main>
        <Testimonial />

        Section: Team
        <section>
          <Typography variant='title' level={2} size={14} weight='semibold' text={'Conheça nosso time'} />
          {/* Figure */}
          {/* Section: Features */}
          <section>
            {/* Cards */}
          </section>
        </section>

        {/* <div> Figure </div> */}

        {/* Section: Jobs */}
        <section>
          <Typography variant='title' level={2} size={16} weight='semibold' text={'Vagas em aberto'} />
        </section>
      </main>
    </S.Wrapper>
  )
}