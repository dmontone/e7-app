import { FC } from 'react'
import { Section, Typography } from 'components/atoms'
import { MemberList } from 'components/molecules'
import * as S from './styles'
import Member1 from './assets/member-1.jpg'
import Member2 from './assets/member-2.jpg'
import Member3 from './assets/member-3.jpg'
import Member4 from './assets/member-4.jpg'

export const Team: FC = () => {
  const members: string[] = [Member1, Member2, Member3, Member4]

  return (
    <Section bgColor='white'>
      <Typography variant='title' level={2} size={14} weight='semibold' text={'Conheça nosso time'} />
      <MemberList members={members} />
    </Section>
  )
}