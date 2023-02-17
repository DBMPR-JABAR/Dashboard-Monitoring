import {
  FETCH_REKAP_PEMELIHARAAN_FAILED,
  FETCH_REKAP_PEMELIHARAAN_LOADING,
  FETCH_REKAP_PEMELIHARAAN_SUCCESS,
} from './rekapPemeliharaanTypes'

const initialRekapPemeliharaanState = {
  isLoading: true,
  data: null,
  error: null,
}

const rekapPemeliharaanReducer = (
  state = initialRekapPemeliharaanState,
  action
) => {
  switch (action.type) {
    case FETCH_REKAP_PEMELIHARAAN_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case FETCH_REKAP_PEMELIHARAAN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case FETCH_REKAP_PEMELIHARAAN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default rekapPemeliharaanReducer
