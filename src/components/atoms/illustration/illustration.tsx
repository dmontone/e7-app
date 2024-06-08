import { FC } from 'react'
import Graph from './assets/graph.png'
import Thumb from './assets/thumb.png'
import Safe from './assets/safe.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

type TIllustration = {
  type: 'graph' | 'thumb' | 'safe'
}

export const Illustration: FC<TIllustration> = ({ type }) => {
  switch (type) {
    case 'graph':
      return <LazyLoadImage alt='Lorem ipsum' src={Graph} width={136} height={136} effect='opacity' />
    case 'thumb':
      return <LazyLoadImage alt='Lorem ipsum' src={Thumb} width={136} height={136} effect='opacity' />
    case 'safe':
      return <LazyLoadImage alt='Lorem ipsum' src={Safe} width={136} height={136} effect='opacity' />
  }
}