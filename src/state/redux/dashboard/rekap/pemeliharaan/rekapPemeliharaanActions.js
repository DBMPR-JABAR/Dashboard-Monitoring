import {
  FETCH_REKAP_PEMELIHARAAN_FAILED,
  FETCH_REKAP_PEMELIHARAAN_LOADING,
  FETCH_REKAP_PEMELIHARAAN_SUCCESS,
} from './rekapPemeliharaanTypes'
import { axiosTemanjabarClient } from '../../../../../services/axiosClient'

const fetchRekapPemeliharaanLoading = () => {
  return {
    type: FETCH_REKAP_PEMELIHARAAN_LOADING,
  }
}

const fetchRekapPemeliharaanSuccess = (data) => {
  return {
    type: FETCH_REKAP_PEMELIHARAAN_SUCCESS,
    payload: data,
  }
}

const fetchRekapPemeliharaanFailed = (err) => {
  return {
    type: FETCH_REKAP_PEMELIHARAAN_FAILED,
    payload: err,
  }
}

const fetchRekapPemeliharaan = () => {
  return async (dispatch) => {
    dispatch(fetchRekapPemeliharaanLoading())
    try {
      const response = await axiosTemanjabarClient.get(
        '/dashboard/rekap-pemeliharaan/2023'
      )
      if (response.data.success) {
        dispatch(fetchRekapPemeliharaanSuccess(response.data.data))
      } else {
        dispatch(
          fetchRekapPemeliharaanFailed(
            response.data.message ||
              response.data.data ||
              'Gagal mengambil rekap sapu lobang'
          )
        )
      }
    } catch (e) {
      console.log(e)
      dispatch(fetchRekapPemeliharaanFailed(e.message))
    }
  }
}
export default fetchRekapPemeliharaan
