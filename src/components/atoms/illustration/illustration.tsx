import { FC } from 'react'
import Graph from './assets/graph.png'
import Thumb from './assets/thumb.png'
import Safe from './assets/safe.png'

type TIllustration = {
  type: 'graph' | 'thumb' | 'safe'
}

export const Illustration: FC<TIllustration> = ({ type }) => {
  switch (type) {
    case 'graph':
      return <img alt='Lorem ipsum' src={Graph} width={136} />
    case 'thumb':
      return <img alt='Lorem ipsum' src={Thumb} width={136} />
    case 'safe':
      return <img alt='Lorem ipsum' src={Safe} width={136} />
  }
}