import { ThemeContext } from '../Theme'
import { BrowserRouter } from 'react-router-dom'

const ContextAndRouterProvider = ({ children }) => {
  // Provide the mock theme object here
  const theme = 'dark-theme'
  
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        {children}
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default ContextAndRouterProvider
