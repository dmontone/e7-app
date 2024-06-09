import { ChangeEvent, ChangeEventHandler, FC, useMemo } from 'react'
import * as S from './styles'
import { Icon } from 'components/atoms'
import { debounce } from 'utils'

type TInput = {
  type?: string
  icon?: 'search'
  placeholder?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input: FC<TInput> = ({ type = 'text', placeholder, onChange, icon }) => {
  const dbcOnChange = useMemo(() => onChange && debounce(onChange), [onChange])

  return (
    <S.Wrapper>
      <S.InputElement type={type} placeholder={placeholder} onChange={dbcOnChange} />
      {icon && <S.Icon>
        <Icon type='search' />
      </S.Icon>}
    </S.Wrapper>
  )
}