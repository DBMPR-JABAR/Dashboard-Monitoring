import Cookies from 'js-cookie'

import axiosClient from '../../../services/axiosClient'
import { USER_JWT_TOKEN, USER_PROFILE } from './index'

import * as AuthType from './authTypes'

const setLoginLoading = () => {
  return {
    type: AuthType.SET_LOGIN_LOADING,
  }
}

const setLoginSuccess = (data) => {
  return {
    type: AuthType.SET_LOGIN_SUCCESS,
    payload: {
      user: data.user,
      token: data.token,
    },
  }
}

const setLoginFailed = (err) => {
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

export const loginUser = (username, password) => {
  return async (dispatch) => {
    dispatch(setLoginLoading())
    try {
      const response = await axiosClient.post('/auth/login', {
        email: username,
        password,
      })
      Cookies.set(USER_JWT_TOKEN, response.data.data.token.access_token)
      localStorage.setItem(
        USER_PROFILE,
        JSON.stringify(response.data.data.user)
      )
      dispatch(setLoginSuccess(response.data))
    } catch (e) {
      console.log(e)
      dispatch(setLoginFailed(e))
    }
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(setLogoutLoading())
    try {
      Cookies.remove(USER_JWT_TOKEN)
      localStorage.removeItem(USER_PROFILE)
      dispatch(setLogoutSuccess())
    } catch (e) {
      dispatch(setLogoutError(e))
    }
  }
}
