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
            header={{
              title: 'trabalhe no elo7',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et viverra orci. Praesent consequat dolor tellus, eget viverra risus hendrerit non. Sed rutrum condimentum maximus. Donec pellentesque libero eu eros sagittis.',
              cta: 'vagas em aberto'
            }}
          />
        </>
      </ThemeProvider>
    </AppContextProvider>
  )
}

export default App
