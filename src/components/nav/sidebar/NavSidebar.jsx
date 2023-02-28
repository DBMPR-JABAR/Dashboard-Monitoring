import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { animated, useTransition } from '@react-spring/web'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import HamburgerSidebar from './HamburgerSidebar'

import logoDashboardAltWithTextSvg from '../../../assets/logo/logo_dashboard_alt_with_text.svg'
import iconCrossFillWhiteSvg from '../../../assets/icon/cross_fill_white.svg'
import menuDotGridAccentGreenSvg from '../../../assets/images/menu-dots-grid-accent-green.svg'
import loginFillGreen from '../../../assets/icon/login_fill_green.svg'
import SidebarItem from './item/SidebarItem'
import { logoutUser } from '../../../state/redux/auth'

export default function NavSidebar() {
  const router = useRouter()
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [isShown, setIsShown] = useState(false)

  const sideNavTransition = useTransition(isShown, {
    from: { opacity: 0, x: '100%' },
    enter: { opacity: 0.5, x: '0%' },
    leave: { opacity: 0, x: '100%' },
  })

  const handleOnClick = () => {
    setIsShown((value) => !value)
  }

  const currentLocation = useMemo(() => {
    if (router.pathname === '/') return '/home'
    if (router.pathname.includes('/dashboard')) return '/dashboard'
    return null
  }, [router.pathname])

  const showGuestNavMenu = () => {
    return (
      <div className="mt-10">
        <SidebarItem
          active={currentLocation === '/home'}
          link="/"
          onClick={handleOnClick}
        >
          Home
        </SidebarItem>
        <Link
          href="/login"
          className="my-16 mx-6 flex cursor-pointer justify-center rounded bg-white py-3 px-4 font-lato text-sm font-bold text-primary-green transition-all"
          onClick={handleOnClick}
        >
          <span className="mr-2 block transition-all">Login</span>
          <Image src={loginFillGreen} className="w-4" alt="Icon Login" />
        </Link>
      </div>
    )
  }

  const showUserNavMenu = () => {
    return (
      <div className="mt-10">
        <SidebarItem
          active={currentLocation === '/home'}
          link="/"
          onClick={handleOnClick}
        >
          Home
        </SidebarItem>
        <SidebarItem
          active={currentLocation === '/dashboard'}
          link="/dashboard"
          onClick={handleOnClick}
        >
          Dashboard
        </SidebarItem>
        <div
          className="my-16 mx-6 flex cursor-pointer justify-center rounded bg-white py-3 px-4 font-lato text-sm font-bold text-primary-green transition-all"
          role="button"
          tabIndex={0}
          onClick={() => {
            handleOnClick()
            dispatch(logoutUser())
          }}
          onKeyDown={() => {
            handleOnClick()
            dispatch(logoutUser())
          }}
        >
          <span className="mr-2 block transition-all">Logout</span>
          <Image src={loginFillGreen} className="w-4" alt="Icon Logout" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <HamburgerSidebar isShown={isShown} onClick={handleOnClick} />
      {sideNavTransition((style, isOpen) => {
        return (
          isOpen && (
            <>
              <animated.div
                className="fixed top-0 right-0 left-0 bottom-0 z-[9998] h-screen w-screen bg-white"
                onClick={handleOnClick}
                style={{ opacity: style.opacity }}
              />
              <animated.div
                className="fixed top-0 right-0 z-[9999] h-screen w-[65%] overflow-y-auto rounded-tl-lg rounded-bl-lg bg-primary-green"
                style={{ x: style.x }}
              >
                <div className="mt-1 flex items-center justify-between py-4 px-6">
                  <Image
                    className="w-28 md:w-36"
                    src={logoDashboardAltWithTextSvg}
                    alt="Logo Temanjabar"
                  />
                  <Image
                    src={iconCrossFillWhiteSvg}
                    className="mt-1 w-3"
                    alt="Tombol tutup sidebar"
                    onClick={handleOnClick}
                  />
                </div>
                {authState.user !== null
                  ? showUserNavMenu()
                  : showGuestNavMenu()}
                <Image
                  src={menuDotGridAccentGreenSvg}
                  alt="Tombol tutup sidebar"
                  className="absolute -bottom-10 right-0 -z-10"
                  onClick={handleOnClick}
                />
              </animated.div>
            </>
          )
        )
      })}
    </div>
  )
}
