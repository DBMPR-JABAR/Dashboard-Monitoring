import { useState, useEffect, useMemo } from 'react'

import useWindowDimensions from '../../hooks/useWindowDimensions'

import Logo from '../logo/Logo'

export default function Nav() {
  const [isOnTop, setIsOnTop] = useState(true)
  const { width } = useWindowDimensions()

  useEffect(() => {
    function onWindowScrolled() {
      setIsOnTop(!(window.scrollY > 0))
    }

    window.addEventListener('scroll', onWindowScrolled)

    return () => {
      window.removeEventListener('scroll', onWindowScrolled)
    }
  }, [])

  const logoSize = useMemo(() => {
    if (width < 640) {
      return 32
    } else if (width < 1024) {
      return 40
    } else if (width < 1280) {
      return 48
    } else {
      return 80
    }
  }, [width])

  return (
    <nav
      className={`sticky top-0 z-[9999] flex justify-between items-center py-3 px-8 border-gray-300 transition lg:px-16 ${
        isOnTop ? 'bg-transparent border-b-0' : 'bg-white border-b'
      }`}
    >
      <Logo height={logoSize} />
      <div>
        <a href="#" className="font-lato text-sm font-bold text-gray-800">
          <span>Home</span>
        </a>
      </div>
    </nav>
  )
}
