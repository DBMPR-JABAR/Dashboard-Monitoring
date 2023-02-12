import { combineReducers } from 'redux'

import authReducer from './auth/authReducer'
import rekapSapuLobangReducer from './dashboard/rekap/sapu_lobang/rekapSapuLobangReducer'
import rekapTalikuatReducer from './dashboard/rekap/talikuat/rekapTalikuatReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: combineReducers({
    rekap: combineReducers({
      sapuLobang: rekapSapuLobangReducer,
      talikuat: rekapTalikuatReducer,
    }),
  }),
})

export default rootReducer
