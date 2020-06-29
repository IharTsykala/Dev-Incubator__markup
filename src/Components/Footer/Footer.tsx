import React from "react"
import SocialNetworks from "../SocialNetworks/SocialNetworks"
import { iconInterface } from "../../Redux/InterfacesEntity/icon.interface"
import { connect } from "react-redux"

type FooterProps = {
  listIconsFooter: iconInterface[],
}

const Footer: React.FunctionComponent<FooterProps> = ({ listIconsFooter }) => {
  console.log(listIconsFooter)
  return (
    <footer className={"footer"}>
      <div className={"footer-social-networks"}>
        <div className={`footer-social-networks__header`}>Follow Us</div>
        <SocialNetworks arraySocialNetworks={listIconsFooter} />
      </div>
    </footer>
  )
}

const mapStateToProps = (state: any) => ({
  listIconsFooter: state.icon.listIconsFooter,
})

export default connect(mapStateToProps)(Footer)
