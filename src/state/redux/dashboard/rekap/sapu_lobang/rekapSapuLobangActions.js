import {
  FETCH_REKAP_SAPU_LOBANG_FAILED,
  FETCH_REKAP_SAPU_LOBANG_LOADING,
  FETCH_REKAP_SAPU_LOBANG_SUCCESS,
} from './rekapSapuLobangTypes'
import { axiosTemanjabarClient } from '../../../../../services/axiosClient'

const fetchRekapSapuLobangLoading = () => {
  return {
    type: FETCH_REKAP_SAPU_LOBANG_LOADING,
  }
}

const fetchRekapSapuLobangSuccess = (data) => {
  return {
    type: FETCH_REKAP_SAPU_LOBANG_SUCCESS,
    payload: data,
  }
}

const fetchRekapSapuLobangFailed = (err) => {
  return {
    type: FETCH_REKAP_SAPU_LOBANG_FAILED,
    payload: err,
  }
}

const fetchRekapSapuLobang = () => {
  return async (dispatch) => {
    dispatch(fetchRekapSapuLobangLoading())
    try {
      const response = await axiosTemanjabarClient.get(
        '/sapu-lubang/rekap-dashboard'
      )
      if (response.data.success) {
        dispatch(fetchRekapSapuLobangSuccess(response.data.data))
      } else {
        dispatch(
          fetchRekapSapuLobangFailed(
            response.data.message ||
              response.data.data ||
              'Gagal mengambil rekap sapu lobang'
          )
        )
      }
    } catch (e) {
      console.log(e)
      dispatch(fetchRekapSapuLobangFailed(e.message))
    }
  }
}
export default fetchRekapSapuLobang
