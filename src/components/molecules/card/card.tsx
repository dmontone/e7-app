import { FC, MouseEvent } from 'react'
import { Button, Icon, Illustration, Typography } from 'components/atoms'
import * as S from './styles'

type TCard = {
  illustration: 'graph' | 'thumb' | 'safe'
  title: string
  text: string
  cta?: {
    text: string
    action: (e: MouseEvent) => void
  }
}

export const Card: FC<TCard> = ({ illustration, title, text, cta }) => {
  return (
    <S.Wrapper>
      <S.Illustration><Illustration type={illustration} /></S.Illustration>
      <Typography variant={'title'} level={3} size={24} text={title} weight='bold' />
      <Typography variant={'text'} size={20} lineHeight={28} align='center' text={text} />
      {cta && <Button onClick={cta.action}>{cta.text} <Icon type={'chevron-right'} /></Button>}
    </S.Wrapper>
  )
}