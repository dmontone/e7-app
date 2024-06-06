import styled, { css } from 'styled-components'
import { TTypography } from './typography'

const common = css`
  font-family: ${({ theme }) => theme.text.font};
`

export const Body = styled.p`
  ${common}
  font-size: ${({ theme }) => theme.text.fontSize.sm}px;
  line-height: ${({ theme }) => theme.text.lineHeight.sm}px;
  font-weight: ${({ theme }) => theme.text.weight.regular};
`

export const Heading = styled.h2`
  ${common}
  font-size: ${({ theme }) => theme.text.fontSize.md}px;
  line-height: ${({ theme }) => theme.text.lineHeight.md}px;
  font-weight: ${({ theme }) => theme.text.weight.semibold};
`

export const Subtitle = styled.div`
  ${common}
  font-size: ${({ theme }) => theme.text.fontSize.sm}px;
  line-height: ${({ theme }) => theme.text.lineHeight.sm}px;
  font-weight: ${({ theme }) => theme.text.weight.regular};
`

export const Title = styled.h1`
  ${common}
  font-size: ${({ theme }) => theme.text.fontSize.xl}px;
  line-height: ${({ theme }) => theme.text.lineHeight.xl}px;
  font-weight: ${({ theme }) => theme.text.weight.bold};
`