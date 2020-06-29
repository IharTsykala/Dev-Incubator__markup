import React from "react"
import SocialNetworks from "../SocialNetworks/SocialNetworks"
import { iconInterface } from "../../Redux/InterfacesEntity/icon.interface"
import { connect } from "react-redux"

type InformationBlockProps = {
  listIconsFooter: iconInterface[],
  nameProps?: string,
  classNameProps?: string,
}

const InformationBlock: React.FunctionComponent<InformationBlockProps> = ({
  listIconsFooter,
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
      <p className={`${className}__text`}>
        Lorem Ipsum is not simply is an action designer random text It has roots
        in a piece.
      </p>
      <SocialNetworks
        arraySocialNetworks={listIconsFooter}
        classNameProps={className}
      />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  listIconsFooter: state.icon.listIconsFooter,
})

export default connect(mapStateToProps)(InformationBlock)
