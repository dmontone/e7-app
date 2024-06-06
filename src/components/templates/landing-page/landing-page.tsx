import { FC } from 'react'
import * as S from './styles'
import { Button, Icon, Typography } from 'components/atoms'
import { Header } from 'components/organisms'

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
        {/* Section: Testimonial */}
        <section>
          {/* Figure */}
          <Typography variant='title' level={2} size={14} weight='semibold' text={'Palavra da vendedora'} />
          <Typography variant='text' size={8} text='Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus vel tortor sed hendrerit. Vestibulum eu sem sapien. Nullam mollis, leo ut finibus euismod, arcu eros aliquam augue, in congue neque nulla vehicula purus.' />
        </section>

        {/* Section: Team */}
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