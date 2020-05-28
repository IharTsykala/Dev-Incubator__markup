import React, { useState } from "react"
import Logo from "../Logo/Logo"

// type SearchProps = {
//   dispatch: any,
// }

const Header: React.FunctionComponent = () => {
  return (
    <header className={"header"}>
      <div className={"header__logo"}>
        <Logo />
      </div>
    </header>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default Header
