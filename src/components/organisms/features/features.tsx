import { FC } from 'react'
import { Card } from 'components/molecules'
import { Section } from 'components/atoms'
import * as S from './styles'

export const Features: FC = () => {
  const solCta = () => {}

  return (
    <Section bgColor={'lightYellow'}>
      <S.Wrapper>
        <Card illustration={'graph'} title={'Resultados'} text={'Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus vel tortor sed hendrerit. Vestibulum eu sem sapien.'} />
        <Card illustration={'thumb'} title={'Qualidade de vida'} cta={{ text: 'dignissim quis', action: solCta }} text={'Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla.'} />
        <Card illustration={'safe'} title={'Nossos valores'} text={'Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus vel tortor sed hendrerit. Vestibulum eu sem sapien.'} />
      </S.Wrapper>
    </Section>
  )
}