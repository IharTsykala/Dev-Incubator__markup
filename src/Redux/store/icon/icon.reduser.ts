import { iconInterface } from "../../InterfacesEntity/icon.interface"

import {
  faPinterestP,
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const arrayIcons = [
  { iconName: "pinterest", iconSVG: faPinterestP },
  { iconName: "twitter", iconSVG: faTwitter },
  { iconName: "facebookF", iconSVG: faFacebookF },
  { iconName: "instagram", iconSVG: faInstagram },
]

export interface State {
  listIcons: iconInterface[];
}

const initialState: State = {
  listIcons: arrayIcons,
}
export const iconReducer = (state: State = initialState) => state
