import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollToHash = () => {
  const { state } = useLocation()

  useEffect(() => {
    if (state && state.hash) {
      const element = document.getElementById(state.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0 })
      }
    }
  }, [state])
}

export default useScrollToHash
