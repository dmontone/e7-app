import styled, { css } from 'styled-components'
import { TTypography } from './typography'

const Common = css`
  font-family: ${({ theme }) => theme.text.font};
`

export const Wrapper = styled.div.attrs<Omit<TTypography, 'text'>>(({ variant, level = 1 }) => ({
  as: variant === 'title' ? `h${level}` : 'p'
}))`
  ${Common}

  ${({
    size = 8,
    theme,
    weight = 'normal',
    color = 'black',
    lineHeight = 1
  }) => {
    const { text, colors } = theme
    
    return css`
      color: ${colors[color]};
      font-size: ${text.size(size)};
      line-height: ${text.lineHeight(size * 1.5)};
      font-weight: ${text.weight[weight]};
    `
  }}

`