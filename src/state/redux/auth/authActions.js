import Cookies from 'js-cookie'

import axiosClient from '../../../services/axiosClient'

import * as AuthType from './authTypes'

export const USER_JWT_TOKEN = 'tj-jwt-token'
export const USER_PROFILE = 'tj-user'

const setFetchUserLoading = () => {
  return {
    type: AuthType.FETCH_USER_LOADING,
  }
}

export const setUserAction = (data) => {
  return {
    type: AuthType.SET_USER,
    payload: {
      user: data.user,
      token: data.token,
    },
  }
}

const setFetchUserSuccess = (data) => {
  return {
    type: AuthType.FETCH_USER_SUCCESS,
    payload: {
      user: data.user,
      token: data.token,
    },
  }
}

const setFetchUserFailed = (err) => {
  return {
    type: AuthType.SET_LOGIN_FAILED,
    payload: err,
  }
}

const setLogoutLoading = () => {
  return {
    type: AuthType.SET_LOGOUT_LOADING,
  }
}

const setLogoutSuccess = () => {
  return {
    type: AuthType.SET_LOGOUT_SUCCESS,
  }
}

const setLogoutError = (err) => {
  return {
    type: AuthType.SET_LOGOUT_FAILED,
    payload: err,
  }
}

// export const loginUser = (username, password) => {
//   return async (dispatch) => {
//     dispatch(setLoginLoading())
//     try {
//       const response = await axiosClient.post('/auth/login', {
//         email: username,
//         password,
//       })
//       Cookies.set(USER_JWT_TOKEN, response.data.data.token.access_token)
//       localStorage.setItem(
//         USER_PROFILE,
//         JSON.stringify(response.data.data.user)
//       )
//       dispatch(setLoginSuccess(response.data))
//     } catch (e) {
//       console.error(e)
//       dispatch(setLoginFailed(e))
//     }
//   }
// }

export const setUser = (data) => {
  return async (dispatch) => {
    await Cookies.set(USER_JWT_TOKEN, data.token.access_token)
    await localStorage.setItem(USER_PROFILE, JSON.stringify(data.user))
    dispatch(setUserAction(data))
  }
}

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(setFetchUserLoading())
    try {
      const user = await JSON.parse(localStorage.getItem(USER_PROFILE))
      const token = await Cookies.get(USER_JWT_TOKEN)
      dispatch(setFetchUserSuccess({ user, token }))
    } catch (e) {
      console.error(e)
      dispatch(setFetchUserFailed(e))
    }
  }
}

export const logoutUser = () => {
  return async (dispatch) => {
    dispatch(setLogoutLoading())
    try {
      await Cookies.remove(USER_JWT_TOKEN)
      await localStorage.removeItem(USER_PROFILE)
      dispatch(setLogoutSuccess())
    } catch (e) {
      console.error(e)
      dispatch(setLogoutError(e))
    }
  }
}
