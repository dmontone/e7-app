import styled, { css, MapToDollar } from 'styled-components'
import { TTypography } from './typography'

const Common = css`
  font-family: ${({ theme }) => theme.text.font};
`

type WrapperType = MapToDollar<Omit<TTypography, 'text'>>

export const Wrapper = styled.div.attrs<WrapperType>(({ $variant, $level = 1 }) => ({
  as: $variant === 'title' ? `h${$level}` : 'p'
}))`
  ${Common}

  ${({
    theme,
    $size = 8,
    $weight = 'normal',
    $color = 'darkGray'
  }) => {
    const { text, colors } = theme
    
    return css`
      color: ${colors[$color as keyof typeof colors]};
      font-size: ${text.size($size)};
      line-height: ${text.lineHeight($size * 1.5)};
      font-weight: ${text.weight[$weight as keyof typeof text.weight]};
    `
  }}

`