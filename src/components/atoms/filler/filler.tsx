import * as S from './styles'
import FillerImage from './assets/filler.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useState } from 'react'

export const Filler = () => {
  const [isImageLoaded, setImageLoaded] = useState<boolean>(false)

  return (
    <S.Wrapper $isVisible={isImageLoaded}>
      <LazyLoadImage src={FillerImage} alt={'Lorem ipsum'} onLoad={() => setImageLoaded(true)} />
    </S.Wrapper>
  )
}