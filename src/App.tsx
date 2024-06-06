import { Icon, LandingPage } from 'components'
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
          <LandingPage
            title={'trabalhe no elo7'}
          />
        </>
      </ThemeProvider>
    </AppContextProvider>
  )
}

export default App
