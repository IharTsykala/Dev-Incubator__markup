import React, { useState } from "react"
import logo from "../../assets/Logo.png"

// type SearchProps = {
//   dispatch: any,
// }

const Logo: React.FunctionComponent = () => {
  return (
    <>
      <img className={"logo"} src={logo} alt="logo" />
    </>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default Logo
