import { FC } from 'react'
import { Photo, Typography } from 'components/atoms'
import * as S from './styles'
import Member1 from './assets/member-1.jpg'
import Member2 from './assets/member-2.jpg'
import Member3 from './assets/member-3.jpg'
import Member4 from './assets/member-4.jpg'

export const Team: FC = () => {
  const Members: string[] = [Member1, Member2, Member3, Member4]

  return (
    <S.Wrapper>
      <Typography variant='title' level={2} size={14} weight='semibold' text={'Conheça nosso time'} />
      <S.MemberList>
        {Members.map(photo => <S.Member>
          <Photo src={photo} alt={'Lorem Ipsum'} width={'100%'} height={'auto'} />
        </S.Member>)}
      </S.MemberList>
    </S.Wrapper>
  )
}