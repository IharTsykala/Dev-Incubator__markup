import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"

type SocialNetworkIconProps = {
  nameIcon: IconDefinition,
}

const SocialNetworkIcon: React.FunctionComponent<SocialNetworkIconProps> = ({
  nameIcon,
}) => {
  return (
    <div className={"social-network-icon"}>
      <FontAwesomeIcon icon={nameIcon} className={"social-network-icon__svg"} />
    </div>
  )
}

export default SocialNetworkIcon
