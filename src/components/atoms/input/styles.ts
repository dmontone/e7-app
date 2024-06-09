import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 48px;
  display: flex;
`

export const InputElement = styled.input`
  font-family: ${({ theme }) => theme.text.font};
  font-weight: ${({ theme }) => theme.text.weight.semibold};
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0 12px;
  font-size: ${({ theme }) => theme.text.size(8)}px;
  line-height: ${({ theme }) => theme.text.size(10)}px;
  color: ${({ theme }) => theme.colors.darkGray};

  &:placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`