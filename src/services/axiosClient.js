import axios from 'axios'
import Cookies from 'js-cookie'

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TEMANJABAR_API,
  headers: { 'Content-Type': 'application/json' },
})

axiosClient.interceptors.request.use(function (config) {
  const jwtToken = Cookies.get('tj-jwt-token')
  if (jwtToken) {
    config.headers.Authorization = `Bearer ${jwtToken}`
  }
  return config
})

export default axiosClient
