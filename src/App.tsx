import { Icon } from 'components'
import { GlobalStyles } from 'global.styles'
import { AppContextProvider } from 'state'
import { ThemeProvider } from 'styled-components'
import * as Theme from 'theme'

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={Theme}>
        <>
        <GlobalStyles />
        <Icon type='search' />
        </>
      </ThemeProvider>
    </AppContextProvider>
  )
}

export default App
