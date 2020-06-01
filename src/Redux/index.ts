import { combineReducers } from "redux"
import { mapCenterReducer } from "./store/map/map.reduser"
import { photoReducer } from "./store/photo/photo.reduser"

export default combineReducers({
  mapCenter: mapCenterReducer,
  photo: photoReducer,
})
