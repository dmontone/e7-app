import { FC } from 'react'
import { Photo, Section, Typography } from 'components/atoms'
import photo from './assets/photo-testimonial.jpg'
import * as S from './styles'

export const Testimonial: FC = () => {
  return (
    <Section bgColor='lightGray'>
      <S.Wrapper>
        <Photo src={photo} alt={'Lorem ipsum'} width={'100%'} height={264} />
        <div>
          <Typography variant='title' level={2} size={26} lineHeight={32} weight='semibold' margin={24} text={'Palavra da vendedora'} subtitle='Sed rutrum condimentum' />
          <Typography variant='text' size={[16, 18, 20]} lineHeight={[24, 26, 30]} text='Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus vel tortor sed hendrerit. Vestibulum eu sem sapien. Nullam mollis, leo ut finibus euismod, arcu eros aliquam augue, in congue neque nulla vehicula purus.' />
        </div>
      </S.Wrapper>
    </Section>
  )
}