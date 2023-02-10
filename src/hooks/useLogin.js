import { useReducer } from 'react'
import loginReducer, {
  initialLoginState,
} from '../state/context/login/loginReducer'

const useLogin = () => {
  return useReducer(loginReducer, initialLoginState)
}

export default useLogin
