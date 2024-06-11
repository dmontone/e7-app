import { Input } from 'components/atoms'
import { FC } from 'react'
import * as S from './styles'

type TSearch = {
  onSearch: (value: string) => void
}

export const Search: FC<TSearch> = ({ onSearch }) => 
  <S.Wrapper>
    <Input placeholder='nome da vaga' icon='search' onChange={e => onSearch(e.target.value)} />
  </S.Wrapper>