import React from "react"
import SocialNetworkIcon from "../SocialNetworkIcon/SocialNetworkIcon"
import pinterest from "../../assets/pinterest2.png"
import twitter from "../../assets/twitter.png"
import facebook from "../../assets/facebook.png"
import basketballBall from "../../assets/basketballBall.png"

const arraySocialNetworks = [
  { nameIcon: "pinterest", iconImg: pinterest },
  { nameIcon: "twitter", iconImg: twitter },
  { nameIcon: "facebook", iconImg: facebook },
  { nameIcon: "basketballBall", iconImg: basketballBall },
]

const SocialNetworks: React.FunctionComponent = () => {
  return (
    <div className={"social-networks"}>
      <div className={"social-networks__header"}>Follow Us</div>
      <ul className={"social-networks__icons-list"}>
        {arraySocialNetworks.map((item: any, index: number) => (
          <SocialNetworkIcon
            key={index}
            iconImg={item.iconImg}
            nameIcon={item.nameIcon}
          />
        ))}
      </ul>
    </div>
  )
}

export default SocialNetworks
