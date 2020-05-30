import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"

type SocialNetworkIconProps = {
  nameIcon: IconDefinition,
  classNameProps: string,
}

const SocialNetworkIcon: React.FunctionComponent<SocialNetworkIconProps> = ({
  nameIcon,
  classNameProps,
}) => {
  return (
    <div className={`${classNameProps}-icon`}>
      <FontAwesomeIcon
        icon={nameIcon}
        className={`${classNameProps}-icon__svg`}
      />
    </div>
  )
}

export default SocialNetworkIcon
