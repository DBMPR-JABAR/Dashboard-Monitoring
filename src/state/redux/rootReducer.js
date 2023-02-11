import { combineReducers } from 'redux'

import authReducer from './auth/authReducer'
import rekapSapuLobangReducer from './dashboard/rekap/sapu_lobang/rekapSapuLobangReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: combineReducers({
    rekap: combineReducers({
      sapuLobang: rekapSapuLobangReducer,
    }),
  }),
})

export default rootReducer
