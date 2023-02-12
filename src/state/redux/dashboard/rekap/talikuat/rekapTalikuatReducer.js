import {
  FETCH_REKAP_TALIKUAT_FAILED,
  FETCH_REKAP_TALIKUAT_LOADING,
  FETCH_REKAP_TALIKUAT_SUCCESS,
} from './rekapTalikuatTypes'

const initialRekapTalikuatState = {
  isLoading: true,
  data: null,
  error: null,
}

const rekapTalikuatReducer = (state = initialRekapTalikuatState, action) => {
  switch (action.type) {
    case FETCH_REKAP_TALIKUAT_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case FETCH_REKAP_TALIKUAT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case FETCH_REKAP_TALIKUAT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default rekapTalikuatReducer
