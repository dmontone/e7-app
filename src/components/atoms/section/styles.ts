import styled, { Colors } from 'styled-components'

type TWrapper = {
  $bgcolor: Colors
}

export const Wrapper = styled.div<TWrapper>`
  background: ${({ theme, $bgcolor }) => theme.colors[$bgcolor]};
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`