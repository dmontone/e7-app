import { Typography } from 'components'
import { AppContextProvider } from 'state'
import { ThemeProvider } from 'styled-components'
import * as Theme from 'theme'

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={Theme}>
        <Typography variant='title'>The quick brown fish jumps over the lazy bird</Typography>
        <Typography variant='heading'>The quick brown fish jumps over the lazy bird</Typography>
        <Typography variant='subtitle'>The quick brown fish jumps over the lazy bird</Typography>
        <Typography variant='body'>The quick brown fish jumps over the lazy bird</Typography>
      </ThemeProvider>
    </AppContextProvider>
  )
}

export default App
