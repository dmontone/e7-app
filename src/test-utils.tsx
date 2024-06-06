import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import * as Theme from 'theme'

export const RenderWithTheme: FC<{ children: ReactNode }> = ({ children }) =>
  <ThemeProvider theme={Theme}>{children}</ThemeProvider>