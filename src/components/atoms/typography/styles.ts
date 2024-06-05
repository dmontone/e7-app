import styled, { css } from 'styled-components'
import { TTypography } from './typography'

export const Wrapper = styled.div<Omit<TTypography, 'children'>>`
  font-family: ${({ theme }) => theme.text.font};

  ${({ variant }) => {
    switch (variant) {
      case 'body':
      default:
        return css`
          font-size: ${({ theme }) => theme.text.fontSize.sm}px;
          line-height: ${({ theme }) => theme.text.lineHeight.sm}px;
          font-weight: ${({ theme }) => theme.text.weight.regular};
        `
      case 'heading':
        return css`
          font-size: ${({ theme }) => theme.text.fontSize.md}px;
          line-height: ${({ theme }) => theme.text.lineHeight.md}px;
          font-weight: ${({ theme }) => theme.text.weight.semibold};
        `
      case 'subtitle':
        return css`
          font-size: ${({ theme }) => theme.text.fontSize.sm}px;
          line-height: ${({ theme }) => theme.text.lineHeight.sm}px;
          font-weight: ${({ theme }) => theme.text.weight.regular};
        `
      case 'title':
        return css`
          font-size: ${({ theme }) => theme.text.fontSize.xl}px;
          line-height: ${({ theme }) => theme.text.lineHeight.xl}px;
          font-weight: ${({ theme }) => theme.text.weight.bold};
        `
    }
  }}
`