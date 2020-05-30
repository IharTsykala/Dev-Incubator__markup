import React from "react"
import SocialNetworks from "../SocialNetworks/SocialNetworks"
import {
  faPinterestP,
  faTwitter,
  faFacebookF,
  faConnectdevelop,
} from "@fortawesome/free-brands-svg-icons"

const arraySocialNetworks = [
  { nameIcon: faPinterestP },
  { nameIcon: faTwitter },
  { nameIcon: faFacebookF },
  { nameIcon: faConnectdevelop },
]

type InformationBlockProps = {
  nameProps?: string,
  classNameProps?: string,
}

const InformationBlock: React.FunctionComponent<InformationBlockProps> = ({
  nameProps,
  classNameProps,
}) => {
  const name = nameProps || "AL RAYHAN"
  const className = classNameProps || "information-block"
  return (
    <div className={className}>
      <h3 className={`${className}__header`}>
        {name}
        <span className={`${className}__header-span`}> / UI Designer</span>
      </h3>
      <p className={`${className}-text`}>
        Lorem Ipsum is not simply is an action designer random text It has roots
        in a piece.
      </p>
      <SocialNetworks
        arraySocialNetworks={arraySocialNetworks}
        classNameProps={className}
      />
    </div>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default InformationBlock
