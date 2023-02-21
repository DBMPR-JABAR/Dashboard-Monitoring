import {
  FETCH_REKAP_TALIKUAT_FAILED,
  FETCH_REKAP_TALIKUAT_LOADING,
  FETCH_REKAP_TALIKUAT_SUCCESS,
} from './rekapTalikuatTypes'
import { axiosTalikuatClient } from '../../../../../services/axiosClient'

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

const fetchRekapTalikuat = (year = 2023, uptd) => {
  return async (dispatch) => {
    dispatch(fetchRekapTalikuatLoading())
    try {
      const response = await axiosTalikuatClient.post(
        '/get-data-pembangunan-by-uptd',
        {
          year,
          uptd: uptd === undefined || uptd === null ? 'all' : uptd,
        }
      )

      if (response.data.status) {
        const formattedData = response.data.data
        dispatch(fetchRekapTalikuatSuccess(formattedData))
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
