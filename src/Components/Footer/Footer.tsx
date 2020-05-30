import React from "react"
import SocialNetworks from "../SocialNetworks/SocialNetworks"
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

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={"footer"}>
      <div className={"footer-social-networks"}>
        <div className={`footer-social-networks__header`}>Follow Us</div>
        <SocialNetworks arraySocialNetworks={arraySocialNetworks} />
      </div>
    </footer>
  )
}

export default Footer
