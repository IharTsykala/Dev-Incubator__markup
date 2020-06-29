import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-common-types"

type SocialNetworkIconProps = {
  iconSVG: IconDefinition,
  classNameProps: string,
}

const SocialNetworkIcon: React.FunctionComponent<SocialNetworkIconProps> = ({
  iconSVG,
  classNameProps,
}) => {
  return (
    <div className={`${classNameProps}-icon`}>
      <FontAwesomeIcon
        icon={iconSVG}
        className={`${classNameProps}-icon__svg`}
      />
    </div>
  )
}

export default SocialNetworkIcon
