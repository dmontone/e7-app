import { FC, useState } from 'react'
import { Dimensions } from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Loading } from 'components/atoms'
import * as S from './styles'

type TPhoto = {
  src: string
  alt: string
  width?: 'auto' | '100%' | number | [number, number, number]
  height?: 'auto' | '100%' | number | [number, number, number]
}

export const Photo: FC<TPhoto> = ({ alt, src, width = 'auto', height = 'auto' }) => {
  const [isLoaded, setLoaded] = useState<boolean>(false)
  
  return (
    <S.Wrapper $width={width} $height={height} $isLoaded={isLoaded}>
      <LazyLoadImage
        alt={alt}
        src={src}
        placeholder={<Loading />}
        onLoad={() => setLoaded(true)}
      />
    </S.Wrapper>
  )
}