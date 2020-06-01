import { Action } from "../../interfacesAction/action.interface"
import { photoWork } from "../../InterfacesEntity/photoWork.interface"

export const ActionTypes = {
  SET_LIST_WORKS_PHOTOS: "[PHOTO] Set list works photos",
  SET_LIST_TEAM_PHOTOS: "[PHOTO] Set list team photos",

  SET_STATE_MODAL_WINDOW: "[Modal] Set state for modal",

  GET_FAILURE: "[getFailure] Get failure",
}

export const setListWorksPhotos = (
  arrayPhotos: [photoWork]
): Action<[photoWork]> => ({
  type: ActionTypes.SET_LIST_WORKS_PHOTOS,
  payload: arrayPhotos,
})

export const setListTeamPhotos = (
  arrayPhotos: [photoWork]
): Action<[photoWork]> => ({
  type: ActionTypes.SET_LIST_TEAM_PHOTOS,
  payload: arrayPhotos,
})

export const setStateModalWindow = (stateModal: boolean): Action<boolean> => ({
  type: ActionTypes.SET_STATE_MODAL_WINDOW,
  payload: stateModal,
})

export const getFailureAction = (error?: any): Action<any> => ({
  type: ActionTypes.GET_FAILURE,
  payload: error,
})
