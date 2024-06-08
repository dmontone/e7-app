import { FC } from 'react'
import { Photo, Section, Typography } from 'components/atoms'
import photo from './assets/photo-testimonial.jpg'

export const Testimonial: FC<{}> = () => {
  return (
    <Section bgColor='lightGray'>
      <Photo src={photo} alt={'Lorem ipsum'} width={'100%'} height={220} />
      <div>
        <Typography variant='title' level={2} size={14} weight='semibold' text={'Palavra da vendedora'} subtitle='Sed rutrum condimentum' />
        <Typography variant='text' size={8} text='Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh tempor sed. Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi ultricies feugiat a vel velit. Pellentesque finibus vel tortor sed hendrerit. Vestibulum eu sem sapien. Nullam mollis, leo ut finibus euismod, arcu eros aliquam augue, in congue neque nulla vehicula purus.' />
      </div>
    </Section>
  )
}