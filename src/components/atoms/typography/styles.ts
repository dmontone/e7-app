import styled, { css } from 'styled-components'

export const Body = styled.p`
  font-size: ${({ theme }) => theme.text.fontSize.sm}px;
  line-height: ${({ theme }) => theme.text.lineHeight.sm}px;
  font-weight: ${({ theme }) => theme.text.weight.regular};
`

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.text.fontSize.md}px;
  line-height: ${({ theme }) => theme.text.lineHeight.md}px;
  font-weight: ${({ theme }) => theme.text.weight.semibold};
`

export const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.text.fontSize.sm}px;
  line-height: ${({ theme }) => theme.text.lineHeight.sm}px;
  font-weight: ${({ theme }) => theme.text.weight.regular};
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.text.fontSize.xl}px;
  line-height: ${({ theme }) => theme.text.lineHeight.xl}px;
  font-weight: ${({ theme }) => theme.text.weight.bold};
`