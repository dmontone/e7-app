import { FC } from 'react'
import * as S from './styles'
import { Photo } from 'components/atoms'

type TMemberList = {
  members: string[]
}

export const MemberList: FC<TMemberList> = ({ members }) => (
  <S.Wrapper>
    {members.map(member =>
      <S.Item key={member}>
        <Photo src={member} alt={'Lorem Ipsum'} width={'100%'} height={'auto'} />
      </S.Item>
    )}
  </S.Wrapper>
)