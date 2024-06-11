import styled, { css, MapToDollar } from 'styled-components'
import { TTypography } from './typography'

type ContentType = MapToDollar<Partial<TTypography>>

export const Wrapper = styled.div<{ $margin?: number }>(({ $margin = 0 }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  marginBottom: $margin
}))

export const Content = styled.div.attrs<ContentType>(({ $variant, $level = 1 }) => ({
  as: $variant === 'title' ? `h${$level}` : 'p'
}))(({ theme, $color, $size = 16, $weight }) => ({
  fontFamily: theme.text.font,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  color: theme.colors[$color as keyof typeof theme.colors],
  fontSize: $size,
  lineHeight: $size * 1.25 + 'px',
  fontWeight: theme.text.weight[$weight as keyof typeof theme.text.weight],
}))

export const Subtitle = styled.p<ContentType>(({ theme, $size = 16 }) => ({
  fontFamily: theme.text.font,
  color: theme.colors.yellow,
  fontSize: $size - 4,
  lineHeight: $size + 'px',
}))