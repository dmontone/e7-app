import { Button } from 'components/atoms/button'
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
        <Button onClick={console.log}>Button element</Button>
        </>
      </ThemeProvider>
    </AppContextProvider>
  )
}

export default App
