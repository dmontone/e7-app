import { Input } from 'components/atoms'
import { FC } from 'react'

type TSearch = {
  onSearch: (value: string) => void
}

export const Search: FC<TSearch> = ({ onSearch }) => 
  <Input placeholder='nome da vaga' icon='search' onChange={e => onSearch(e.target.value)} />