import { combineReducers } from "redux"
import { mapCenterReducer } from "./store/map/map.reduser"

export default combineReducers({
  mapCenter: mapCenterReducer,
})
