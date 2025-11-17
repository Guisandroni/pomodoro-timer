import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './components/styles/themes/default'
import { GlobalStyles } from './components/styles/globalStyles'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { CyclesContextProvider } from './contexts/CyclesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <CyclesContextProvider>
          <Router/>
          <GlobalStyles/>
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App


