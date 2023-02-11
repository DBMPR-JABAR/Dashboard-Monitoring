import { useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'

import { logoutUser } from '../../state/redux/auth'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import Container from '../container/Container'

import Logo from '../logo/Logo'
import loginFillWhite from '../../assets/icon/login_fill_white.svg'

export default function Nav() {
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch()
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

  const showLoginComponent = () => (
    <Link
      href="/LoginPage"
      className={`flex justify-between font-lato text-sm font-bold text-white py-2 px-4 rounded-lg transition-all ${
        isOnHover ? 'bg-green-700' : 'bg-primary-green'
      }`}
      onMouseEnter={() => setIsOnHover(true)}
      onMouseLeave={() => setIsOnHover(false)}
    >
      <span className={`block transition-all ${isOnHover ? 'mr-3' : 'mr-2'}`}>
        Login
      </span>
      <Image src={loginFillWhite} className="w-4" alt="Icon Login" />
    </Link>
  )

  const showUserComponent = () => {
    return (
      <div className="flex items-center">
        <Link
          href="/dashboard"
          className="font-lato text-sm font-bold text-gray-700 mr-8 transition-all hover:text-primary-green"
        >
          Dashboard
        </Link>
        <div
          className={`flex justify-between font-lato text-sm font-bold text-white py-2 px-4 rounded-lg cursor-pointer transition-all ${
            isOnHover ? 'bg-green-700' : 'bg-primary-green'
          }`}
          onMouseEnter={() => setIsOnHover(true)}
          onMouseLeave={() => setIsOnHover(false)}
          onClick={() => dispatch(logoutUser())}
        >
          <span
            className={`block transition-all ${isOnHover ? 'mr-3' : 'mr-2'}`}
          >
            Logout
          </span>
          <Image src={loginFillWhite} className="w-4" alt="Icon Login" />
        </div>
      </div>
    )
  }

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
            {authState.user !== null
              ? showUserComponent()
              : showLoginComponent()}
          </div>
        </div>
      </Container>
    </nav>
  )
}
