import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    font-family: ${({ theme }) => theme.text.font};
  }
`