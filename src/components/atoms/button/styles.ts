import styled from 'styled-components'

export const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.text.fontSize.sm}px;
  line-height: ${({ theme }) => theme.text.lineHeight.sm}px;
  font-weight: ${({ theme }) => theme.text.weight.regular};
`