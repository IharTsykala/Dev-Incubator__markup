import React from "react"
import Logo from "../Logo/Logo"

const Header: React.FunctionComponent = () => {
  return (
    <header className={"header"}>
      <div className={"header__logo"}>
        <Logo />
      </div>
    </header>
  )
}

export default Header
