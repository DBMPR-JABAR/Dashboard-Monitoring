import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import Container from '../container/Container'

import Logo from '../logo/Logo'
import NavSidebar from './sidebar/NavSidebar'
import NavTopbar from './topbar/NavTopbar'

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
    } else {
      return 48
    }
  }, [width])

  return (
    <nav
      className={`sticky top-0 z-[999] border-gray-300 transition ${
        isOnTop ? 'border-b-0 bg-transparent' : 'border-b bg-white'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <Logo height={logoSize} />
          </Link>
          {width >= 1024 ? <NavTopbar /> : <NavSidebar />}
        </div>
      </Container>
    </nav>
  )
}
