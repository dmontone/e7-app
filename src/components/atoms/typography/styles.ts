import styled, { css, MapToDollar } from 'styled-components'
import { TTypography } from './typography'
import { getFontSize } from 'utils'
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
}))(({ theme, $color, $size = 16, $lineHeight = 0, $weight }) => {
  const getSize = getFontSize($size)
  const getLineHeight = getFontSize($lineHeight, getSize())

  return {
    fontFamily: theme.text.font,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    color: theme.colors[$color as keyof typeof theme.colors],
    fontSize: getSize(),
    lineHeight: getLineHeight() + 'px',
    fontWeight: theme.text.weight[$weight as keyof typeof theme.text.weight],

    [`@media ${device.tablet}`]: {
      fontSize: getSize(1),
      lineHeight: getSize(1) + 'px',
    },

    [`@media ${device.desktop}`]: {
      fontSize: getSize(2),
      lineHeight: getSize(2) + 'px',
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