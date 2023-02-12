import Cookies from 'js-cookie'

import moment from 'moment'

import * as AuthType from './authTypes'

export const USER_JWT_TOKEN = 'tj-jwt-token'
export const USER_JWT_EXPIRE_TIMESTAMP = 'tj-jwt-expire-timestamp'
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
    type: AuthType.FETCH_USER_FAILED,
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

export const setUser = (data) => {
  return async (dispatch) => {
    await Cookies.set(USER_JWT_TOKEN, data.token.access_token)
    const expireTimeStamp = moment().add(1, 'days').toDate().getTime()
    await Cookies.set(USER_JWT_EXPIRE_TIMESTAMP, expireTimeStamp)
    await localStorage.setItem(USER_PROFILE, JSON.stringify(data.user))
    const user = {
      user: data.user,
      token: {
        accessToken: data.token.access_token,
        expireTimeStamp: expireTimeStamp,
      },
    }
    dispatch(setUserAction(user))
  }
}

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(setFetchUserLoading())
    try {
      const user = await JSON.parse(localStorage.getItem(USER_PROFILE))
      const accessToken = await Cookies.get(USER_JWT_TOKEN)
      const expireTimeStamp = await Cookies.get(USER_JWT_EXPIRE_TIMESTAMP)
      if (moment(parseInt(expireTimeStamp, 10)) > moment()) {
        let token = null
        if (accessToken && expireTimeStamp) {
          token = {
            accessToken: accessToken,
            expireTimeStamp,
          }
        }
        dispatch(
          setFetchUserSuccess({
            user,
            token: token,
          })
        )
      } else {
        await Cookies.remove(USER_JWT_TOKEN)
        await Cookies.remove(USER_JWT_EXPIRE_TIMESTAMP)
        await localStorage.removeItem(USER_PROFILE)
        dispatch(
          setFetchUserSuccess({
            user: null,
            token: null,
          })
        )
      }
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
      await Cookies.remove(USER_JWT_EXPIRE_TIMESTAMP)
      await localStorage.removeItem(USER_PROFILE)
      dispatch(setLogoutSuccess())
    } catch (e) {
      console.error(e)
      dispatch(setLogoutError(e))
    }
  }
}
