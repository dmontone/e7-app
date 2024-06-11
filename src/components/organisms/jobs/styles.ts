import styled, { css } from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Content = styled.div<{ $centralize: boolean }>`
  min-height: 320px;

  ${({ $centralize }) => $centralize && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`