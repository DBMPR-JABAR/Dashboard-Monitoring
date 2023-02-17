import { combineReducers } from 'redux'

import authReducer from './auth/authReducer'
import rekapSapuLobangReducer from './dashboard/rekap/sapu_lobang/rekapSapuLobangReducer'
import rekapTalikuatReducer from './dashboard/rekap/talikuat/rekapTalikuatReducer'
import rumijaReducer from './dashboard/rekap/rumija/rekapRumijaReducer'
import pemeliharaanReducer from './dashboard/rekap/pemeliharaan/rekapPemeliharaanReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: combineReducers({
    rekap: combineReducers({
      talikuat: rekapTalikuatReducer,
      sapuLobang: rekapSapuLobangReducer,
      pemeliharaan: pemeliharaanReducer,
      rumija: rumijaReducer,
    }),
  }),
})

export default rootReducer
