import React from "react"
import SocialNetworkIcon from "../SocialNetworkIcon/SocialNetworkIcon"
import {
  faPinterestP,
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const arraySocialNetworks = [
  { nameIcon: faPinterestP },
  { nameIcon: faTwitter },
  { nameIcon: faFacebookF },
  { nameIcon: faInstagram },
]

const SocialNetworks: React.FunctionComponent = () => {
  return (
    <div className={"social-networks"}>
      <div className={"social-networks__header"}>Follow Us</div>
      <ul className={"social-networks__icons-list"}>
        {arraySocialNetworks.map((item: any, index: number) => (
          <SocialNetworkIcon key={index} nameIcon={item.nameIcon} />
        ))}
      </ul>
    </div>
  )
}

export default SocialNetworks
