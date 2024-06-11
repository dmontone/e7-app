import { device } from 'device.config'
import styled, { Colors } from 'styled-components'

type TWrapper = {
  $bgcolor: Colors
}

export const Wrapper = styled.div<TWrapper>(({ theme, $bgcolor }) => ({
  backgroundColor: theme.colors[$bgcolor],
  padding: '40px 16px',
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
}))