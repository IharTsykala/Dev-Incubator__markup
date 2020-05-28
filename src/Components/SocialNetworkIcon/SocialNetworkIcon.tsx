import React from "react"

type SocialNetworkIconProps = {
  iconImg: any,
  nameIcon: string,
}

const SocialNetworkIcon: React.FunctionComponent<SocialNetworkIconProps> = ({
  iconImg,
  nameIcon,
}) => {
  return (
    <div className={"social-network-icon"}>
      <img
        className={"social-network-icon__img"}
        src={iconImg}
        alt={nameIcon}
      />
    </div>
  )
}

export default SocialNetworkIcon
