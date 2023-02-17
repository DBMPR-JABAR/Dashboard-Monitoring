import {
  FETCH_REKAP_RUMIJA_FAILED,
  FETCH_REKAP_RUMIJA_LOADING,
  FETCH_REKAP_RUMIJA_SUCCESS,
} from './rekapRumijaTypes'

const initialRekapRumijaState = {
  isLoading: true,
  data: null,
  error: null,
}

const rekapRumijaReducer = (state = initialRekapRumijaState, action) => {
  switch (action.type) {
    case FETCH_REKAP_RUMIJA_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case FETCH_REKAP_RUMIJA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }
    case FETCH_REKAP_RUMIJA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default rekapRumijaReducer
