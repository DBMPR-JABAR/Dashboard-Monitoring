import { useState, useEffect } from 'react'

import Logo from '../logo/Logo'

export default function Nav() {
  const [isOnTop, setIsOnTop] = useState(true)

  useEffect(() => {
    function onWindowScrolled() {
      setIsOnTop(!(window.scrollY > 0))
    }

    window.addEventListener('scroll', onWindowScrolled)

    return () => {
      window.removeEventListener('scroll', onWindowScrolled)
    }
  }, [])

  return (
    <nav
      className={`sticky top-0 z-[9999] flex justify-between items-center py-3 px-8 border-gray-300 transition ${
        isOnTop ? 'bg-transparent border-b-0' : 'bg-white border-b'
      }`}
    >
      <Logo height={32} />
      <div>
        <a href="#" className="font-lato text-sm font-bold text-gray-800">
          <span>Home</span>
        </a>
      </div>
    </nav>
  )
}
