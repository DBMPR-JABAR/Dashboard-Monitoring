import * as AuthType from './authTypes'

const initialState = {
  isLoading: false,
  user: null,
  token: null,
  error: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthType.SET_LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case AuthType.SET_LOGIN_SUCCESS:
      return {
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      }
    case AuthType.SET_LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case AuthType.SET_LOGOUT_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case AuthType.SET_LOGOUT_SUCCESS:
      return {
        isLoading: false,
        user: null,
        token: null,
        error: null,
      }
    case AuthType.SET_LOGOUT_FAILED:
      return {
        isLoading: false,
        user: null,
        token: null,
        error: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
