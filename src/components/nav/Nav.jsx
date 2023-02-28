import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'

import { logoutUser } from '../../state/redux/auth'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import Container from '../container/Container'

import Logo from '../logo/Logo'
import loginFillWhite from '../../assets/icon/login_fill_white.svg'
import NavSidebar from './sidebar/NavSidebar'

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
      href="/login"
      className={`flex justify-between rounded-lg py-2 px-4 font-lato text-sm font-bold text-white transition-all ${
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
          className="mr-8 font-lato text-sm font-bold text-gray-700 transition-all hover:text-primary-green"
        >
          Dashboard
        </Link>
        <div
          className={`flex cursor-pointer justify-between rounded-lg py-2 px-4 font-lato text-sm font-bold text-white transition-all ${
            isOnHover ? 'bg-green-700' : 'bg-primary-green'
          }`}
          onMouseEnter={() => setIsOnHover(true)}
          onMouseLeave={() => setIsOnHover(false)}
          onClick={() => dispatch(logoutUser())}
          onKeyDown={() => dispatch(logoutUser())}
          role="button"
          tabIndex={0}
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

  const showNav = () => (
    <div>
      {authState.user !== null ? showUserComponent() : showLoginComponent()}
    </div>
  )

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
          {/* {showNav()} */}
          <div className="">
            <NavSidebar />
          </div>
        </div>
      </Container>
    </nav>
  )
}
