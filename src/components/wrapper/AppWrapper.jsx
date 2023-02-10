import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchUser } from '../../state/redux/auth'
import Loading from '../loading/Loading'

export default function AppWrapper({ children }) {
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return authState.isLoading ? <Loading /> : children
}
