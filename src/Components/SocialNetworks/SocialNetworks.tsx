import React from "react"
import SocialNetworkIcon from "./SocialNetworkIcon/SocialNetworkIcon"
import { iconInterface } from "../../Redux/InterfacesEntity/icon.interface"

type SocialNetworksProps = {
  arraySocialNetworks: iconInterface[],
  classNameProps?: string,
}

const SocialNetworks: React.FunctionComponent<SocialNetworksProps> = ({
  arraySocialNetworks,
  classNameProps,
}) => {
  const className = classNameProps || "social-networks"
  return (
    <ul className={`${className}__icons-list`}>
      {arraySocialNetworks.map((item: any, index: number) => (
        <SocialNetworkIcon
          key={index}
          iconSVG={item.iconSVG}
          classNameProps={className}
        />
      ))}
    </ul>
  )
}

export default SocialNetworks
