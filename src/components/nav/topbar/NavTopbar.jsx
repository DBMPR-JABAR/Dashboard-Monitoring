import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import loginFillWhite from '../../../assets/icon/login_fill_white.svg'
import { logoutUser } from '../../../state/redux/auth'

export default function NavTopbar() {
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [isOnHover, setIsOnHover] = useState(false)

  const showGuestMenuNav = () => (
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

  const showUserMenuNav = () => {
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

  if (authState.user !== null) return showUserMenuNav()

  return showGuestMenuNav()
}
