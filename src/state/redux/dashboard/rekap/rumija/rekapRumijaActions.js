import {
  FETCH_REKAP_RUMIJA_FAILED,
  FETCH_REKAP_RUMIJA_LOADING,
  FETCH_REKAP_RUMIJA_SUCCESS,
} from './rekapRumijaTypes'
import { axiosTemanjabarClient } from '../../../../../services/axiosClient'

const fetchRekapRumijaLoading = () => {
  return {
    type: FETCH_REKAP_RUMIJA_LOADING,
  }
}

const fetchRekapRumijaSuccess = (data) => {
  return {
    type: FETCH_REKAP_RUMIJA_SUCCESS,
    payload: data,
  }
}

const fetchRekapRumijaFailed = (err) => {
  return {
    type: FETCH_REKAP_RUMIJA_FAILED,
    payload: err,
  }
}

const fetchRekapRumija = () => {
  return async (dispatch) => {
    dispatch(fetchRekapRumijaLoading())
    try {
      const response = await axiosTemanjabarClient.get(
        '/dashboard/rekap-rumija'
      )
      if (response.data.success) {
        dispatch(fetchRekapRumijaSuccess(response.data.data))
      } else {
        dispatch(
          fetchRekapRumijaFailed(
            response.data.message ||
              response.data.data ||
              'Gagal mengambil rekap sapu lobang'
          )
        )
      }
    } catch (e) {
      console.log(e)
      dispatch(fetchRekapRumijaFailed(e.message))
    }
  }
}
export default fetchRekapRumija
