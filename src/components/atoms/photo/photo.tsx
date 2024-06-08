import { FC } from 'react'
import { Dimensions } from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import * as S from './styles'
import 'react-lazy-load-image-component/src/effects/blur.css'

type TPhoto = {
  src: string
  alt: string
  width?: Dimensions
  height?: Dimensions
}

const Loading: FC = () => <>Loading</>

export const Photo: FC<TPhoto> = ({ alt, src, width = 'auto', height = 'auto' }) => {
  return (
    <S.Wrapper width={width} height={height}>
      <LazyLoadImage
        alt={alt}
        src={src}
        effect='blur'
      />
    </S.Wrapper>
  )
}