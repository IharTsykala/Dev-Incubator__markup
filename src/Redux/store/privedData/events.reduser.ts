import { mapCenter } from "../../InterfacesEntity/mapCenter.interface"
import { Action } from "../../interfacesAction/action.interface"

export interface State {
  mapCenter: mapCenter;
}

const initialState: State = {
  mapCenter: {
    lat: 53.901634,
    lng: 27.545265,
  },
}

export const eventsReducer = (
  state: State = initialState,
  action: Action<{}>
) => {
  switch (action.type) {
  default:
    return state
  }
}
