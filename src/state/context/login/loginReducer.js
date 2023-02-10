import * as LoginType from './loginTypes'

export const initialLoginState = {
  isLoading: false,
  error: null,
  isSuccess: false,
}

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LoginType.LOGIN_LOADING:
      return {
        isLoading: true,
        error: null,
        isSuccess: false,
      }
    case LoginType.LOGIN_SUCCESS:
      return {
        isLoading: false,
        error: null,
        isSuccess: true,
      }
    case LoginType.LOGIN_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        isSuccess: false,
      }
    default:
      return state
  }
}

export default loginReducer
