import '../styles/globals.css'

import { Chart as ChartJS, registerables } from 'chart.js'
import { Provider } from 'react-redux'
import { useEffect, useReducer } from 'react'

import Cookies from 'js-cookie'
import appStore from '../state/redux/appStore'

import * as AuthConstant from '../helper/auth_constant'
import AuthContext from '../context/auth_context'
import {
  SET_USER,
  USER_LOADING,
  USER_LOADING_FINISH,
} from '../helper/auth_constant'

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

ChartJS.register(...registerables)

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
    <Provider store={appStore}>
      <main>
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
    </Provider>
  )
}
