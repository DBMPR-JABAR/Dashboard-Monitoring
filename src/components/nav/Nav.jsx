import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'

import useWindowDimensions from '../../hooks/useWindowDimensions'

import Logo from '../logo/Logo'

import loginFillWhite from '../../assets/icon/login_fill_white.svg'
import Container from '../container/Container'
import Link from 'next/link'

export default function Nav() {
  const [isOnHover, setIsOnHover] = useState(false)
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
      className={`sticky top-0 z-[9999] border-gray-300 transition ${
        isOnTop ? 'bg-transparent border-b-0' : 'bg-white border-b'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-3">
          <Link href="/">
            <Logo height={logoSize} />
          </Link>
          <div>
            <a
              href="https://tj.temanjabar.net"
              className={`flex justify-between font-lato text-sm font-bold text-white py-2 px-4 rounded-lg transition-all ${
                isOnHover ? 'bg-green-700' : 'bg-primaryGreen'
              }`}
              onMouseEnter={() => setIsOnHover(true)}
              onMouseLeave={() => setIsOnHover(false)}
            >
              <span
                className={`block transition-all ${
                  isOnHover ? 'mr-3' : 'mr-2'
                }`}
              >
                Login
              </span>
              <Image src={loginFillWhite} className="w-4" alt="Icon Login" />
            </a>
          </div>
        </div>
      </Container>
    </nav>
  )
}
