import styled, { css, MapToDollar } from 'styled-components'
import { TTypography } from './typography'

const Common = css`
  font-family: ${({ theme }) => theme.text.font};
`

type WrapperType = MapToDollar<Partial<TTypography>>

export const Wrapper = styled.div.attrs<WrapperType>(({ $variant, $level = 1 }) => ({
  as: $variant === 'title' ? `h${$level}` : 'p'
}))`
  ${Common}

  display: flex;
  flex-direction: column;
  gap: 4px;

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
      line-height: ${text.lineHeight($size * 1.25)};
      font-weight: ${text.weight[$weight as keyof typeof text.weight]};

      ${Subtitle} {
        color: ${colors.yellow};
        font-size: ${text.size($size - 4)};
        line-height: ${text.lineHeight($size - 2)};
      }
    `
  }}

`

export const Subtitle = styled.p``