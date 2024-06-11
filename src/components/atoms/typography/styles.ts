import styled, { MapToDollar } from 'styled-components'
import { TTypography } from './typography'
import { getSize } from 'utils'
import { device } from 'device.config'

type ContentType = MapToDollar<Partial<TTypography>>

export const Wrapper = styled.div<{ $margin?: number }>(({ $margin = 0 }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  marginBottom: $margin
}))

export const Content = styled.div.attrs<ContentType>(({ $variant, $level = 1 }) => ({
  as: $variant === 'title' ? `h${$level}` : 'p'
}))(({ theme, $color, $size = 16, $lineHeight = 20, $weight, $align }) => {
  const getFontSize = getSize($size)
  const getLineHeight = getSize($lineHeight)

  return {
    fontFamily: theme.text.font,
    fontSize: getFontSize(),
    lineHeight: getLineHeight() + 'px',
    textAlign: $align || 'left',
    color: theme.colors[$color as keyof typeof theme.colors],
    fontWeight: theme.text.weight[$weight as keyof typeof theme.text.weight],
    display: 'flex',
    flexDirection: 'column',
    gap: 4,

    [`@media ${device.tablet}`]: {
      fontSize: getFontSize(1),
      lineHeight: getLineHeight(1) + 'px',
    },

    [`@media ${device.desktop}`]: {
      fontSize: getFontSize(2),
      lineHeight: getLineHeight(2) + 'px',
    },
  }
})

export const Subtitle = styled.p<ContentType>(({ theme, $size = 16, $lineHeight }) => {
  const size = typeof $size === 'number' ? $size : $size[0]
  const lineHeight = ($lineHeight instanceof Array ? $lineHeight[0] : $lineHeight) || size * 1.25 + 'px'

  return {
    fontFamily: theme.text.font,
    color: theme.colors.yellow,
    fontSize: size,
    lineHeight,
  }
})