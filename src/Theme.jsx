import React, { useEffect, createContext, useState } from 'react'

const ThemeContext = createContext()

const getTheme = () => {
  const theme = localStorage.getItem('ryan-r-campbell-theme')
  if (!theme) {
    localStorage.setItem('ryan-r-campbell-theme', 'dark-theme')
    return 'dark-theme'
  } else {
    return theme
  }
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme)

  function toggleTheme() {
    if (theme === 'dark-theme') {
      setTheme('light-theme')
    } else {
      setTheme('dark-theme')
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem('ryan-r-campbell-theme', theme)
    }

    refreshTheme()
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
