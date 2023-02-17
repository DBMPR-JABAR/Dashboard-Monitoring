import axios from 'axios'
import Cookies from 'js-cookie'

const axiosTemanjabarClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TEMANJABAR_API,
  headers: { 'Content-Type': 'application/json' },
})

axiosTemanjabarClient.interceptors.request.use(function (config) {
  const jwtToken = Cookies.get('tj-jwt-token')
  if (jwtToken) {
    config.headers.Authorization = `Bearer ${jwtToken}`
  }
  return config
})

const axiosTalikuatClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TALIKUAT_API,
  headers: { 'Content-Type': 'application/json' },
})

export { axiosTemanjabarClient, axiosTalikuatClient }
