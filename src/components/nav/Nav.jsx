import { useState, useEffect } from 'react'

import Logo from '../logo/Logo'

export default function Nav() {
  const [isOnTop, setIsOnTop] = useState(false)

  useEffect(() => {
    function onWindowScrolled() {
      setIsOnTop(window.scrollY > 0)
    }
    window.addEventListener('scroll', onWindowScrolled)
    return () => {
      window.removeEventListener('scroll', onWindowScrolled)
    }
  }, [])

  return (
    <nav
      className={`sticky z-50 top-0 flex justify-between items-center py-3 px-44 border-gray-300 transition ${
        isOnTop ? 'bg-white border-b' : 'bg-transparent border-b-0'
      }`}
    >
      <Logo />
      <div>
        <a href="#" className="font-lato text-sm font-bold text-gray-800">
          <span>Home</span>
        </a>
      </div>
    </nav>
  )
}
