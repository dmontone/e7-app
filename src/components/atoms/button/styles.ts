import styled from 'styled-components'

export const Wrapper = styled.div`
  font-family: ${({ theme }) => theme.text.font};
  size: ${({ theme }) => theme.text.size(10)};
  color: ${({ theme }) => theme.colors.cyan};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  width: 100%;
  height: 48px;
  line-height: 48px;
`