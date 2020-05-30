import React from "react"
import SocialNetworkIcon from "./SocialNetworkIcon/SocialNetworkIcon"

interface SocialNetwork {
  nameIcon: string;
}

type SocialNetworksProps = {
  arraySocialNetworks: [SocialNetwork] | any,
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
          nameIcon={item.nameIcon}
          classNameProps={className}
        />
      ))}
    </ul>
  )
}

export default SocialNetworks
