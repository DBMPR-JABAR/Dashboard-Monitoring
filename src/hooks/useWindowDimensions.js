import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const screen = { width: 0, height: 0 }

  if (typeof window !== 'undefined') {
    screen.width = window.innerWidth
    screen.height = window.innerHeight
  }

  return screen
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
