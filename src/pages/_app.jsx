import '../styles/globals.css'

import { useEffect, useReducer } from 'react'
import Cookies from 'js-cookie'

import { Roboto, Lato, Lora } from '@next/font/google'
import localFont from '@next/font/local'

import * as AuthConstant from '../helper/auth_constant'
import AuthContext from '../context/auth_context'
import {
  SET_USER,
  USER_LOADING,
  USER_LOADING_FINISH,
} from '../helper/auth_constant'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--display-default',
})

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--display-lato',
})

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--display-lora',
})

const intro = localFont({
  src: [
    {
      path: '../assets/fonts/intro/intro_thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/intro/intro_light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/intro/intro_regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/intro/intro_bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/intro/intro_black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--display-intro',
})

const initialUserState = {
  user: null,
  token: null,
  isLoading: true,
}

const authReducer = (state, action) => {
  switch (action.type) {
    case AuthConstant.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case AuthConstant.USER_LOADING_FINISH:
      return {
        ...state,
        isLoading: false,
      }
    case AuthConstant.SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      }
    case AuthConstant.DELETE_USER:
      return {
        ...state,
        user: null,
        token: null,
      }
    default:
      return state
  }
}

export default function App({ Component, pageProps }) {
  const [authState, dispatchAuthEvent] = useReducer(
    authReducer,
    initialUserState
  )

  useEffect(() => {
    const getUser = async () => {
      dispatchAuthEvent({ type: USER_LOADING })
      const user = JSON.parse(localStorage.getItem('tj-user'))
      const token = Cookies.get('tj-jwt-token')
      // console.log(user)
      dispatchAuthEvent({ type: SET_USER, payload: { user, token } })
      dispatchAuthEvent({ type: USER_LOADING_FINISH })
    }

    getUser()
  }, [])

  return (
    <main
      className={`${roboto.variable} ${intro.variable} ${lato.variable} ${lora.variable} font-default`}
    >
      <AuthContext.Provider
        value={{
          state: authState,
          dispatchAuthEvent,
        }}
      >
        {authState.isLoading ? (
          <h1 className="flex justify-center items-center min-h-screen">
            Loading ...
          </h1>
        ) : (
          <Component {...pageProps} />
        )}
      </AuthContext.Provider>
    </main>
  )
}
