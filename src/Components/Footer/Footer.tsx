import React, { useState } from "react"
import SocialNetworks from "../SocialNetworks/SocialNetworks"

// type SearchProps = {
//   dispatch: any,
// }

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={"footer"}>
      <SocialNetworks />
    </footer>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default Footer
