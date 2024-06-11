import styled, { keyframes } from 'styled-components'

const animationSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const Wrapper = styled.div`
  & > * {
    animation: ${animationSpin} 2s infinite linear;
    color: ${({ theme }) => theme.colors.lightGrayColor};
  }
`