
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './components/styles/themes/default'
import { GlobalStyles } from './components/styles/globalStyles'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'

function App() {


  return (
    // chamando themeProvider para poder passar o thema
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Router/>
      <GlobalStyles/>
    {/* passando estilização global */}
    </BrowserRouter>
  
    </ThemeProvider>
  )
}

export default App


{/* <Button variant='primary'/>
    
    <Button variant='danger'/>
    
    <Button variant='secondary'/>
    <Button variant='neutral'/>
    <Button variant='success'/>
    <Button/> */}