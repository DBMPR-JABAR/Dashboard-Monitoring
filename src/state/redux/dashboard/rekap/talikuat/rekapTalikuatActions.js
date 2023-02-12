import axios from 'axios'
import {
  FETCH_REKAP_TALIKUAT_FAILED,
  FETCH_REKAP_TALIKUAT_LOADING,
  FETCH_REKAP_TALIKUAT_SUCCESS,
} from './rekapTalikuatTypes'

const fetchRekapTalikuatLoading = () => {
  return {
    type: FETCH_REKAP_TALIKUAT_LOADING,
  }
}

const fetchRekapTalikuatSuccess = (data) => {
  return {
    type: FETCH_REKAP_TALIKUAT_SUCCESS,
    payload: data,
  }
}

const fetchRekapTalikuatFailed = (err) => {
  return {
    type: FETCH_REKAP_TALIKUAT_FAILED,
    payload: err,
  }
}

const fetchRekapTalikuat = () => {
  return async (dispatch) => {
    dispatch(fetchRekapTalikuatLoading())
    try {
      const response = await axios.get(
        'https://tk.temanjabar.net/api/get-data-pembangunan22'
      )
      console.log(response.data)
      if (response.data.status) {
        dispatch(fetchRekapTalikuatSuccess(response.data.data))
      } else {
        dispatch(
          fetchRekapTalikuatFailed(
            response.data.message ||
              response.data.data ||
              'Gagal mengambil rekap sapu lobang'
          )
        )
      }
    } catch (e) {
      console.error(e)
      dispatch(fetchRekapTalikuatFailed(e.message))
    }
  }
}

export default fetchRekapTalikuat
