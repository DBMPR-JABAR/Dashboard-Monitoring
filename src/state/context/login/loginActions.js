import * as LoginType from './loginTypes'

export const loginLoading = () => {
  return {
    type: LoginType.LOGIN_LOADING,
  }
}

export const loginSucces = () => {
  return {
    type: LoginType.LOGIN_SUCCESS,
  }
}

export const loginFailed = (err) => {
  return {
    type: LoginType.LOGIN_FAILED,
    payload: err,
  }
}
