import {
  FETCH_REKAP_SAPU_LOBANG_FAILED,
  FETCH_REKAP_SAPU_LOBANG_LOADING,
  FETCH_REKAP_SAPU_LOBANG_SUCCESS,
} from './rekapSapuLobangTypes'

const initialRekapSapuLobangState = {
  isLoading: true,
  data: null,
  error: null,
}

const rekapSapuLobangReducer = (
  state = initialRekapSapuLobangState,
  action
) => {
  switch (action.type) {
    case FETCH_REKAP_SAPU_LOBANG_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_REKAP_SAPU_LOBANG_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case FETCH_REKAP_SAPU_LOBANG_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default rekapSapuLobangReducer
