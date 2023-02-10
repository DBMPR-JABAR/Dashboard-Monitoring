import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchUser } from '../../state/redux/auth'

export default function AppWrapper({ children }) {
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return authState.isLoading ? (
    <h1 className="flex justify-center items-center min-h-screen">
      Loading ...
    </h1>
  ) : (
    children
  )
}
