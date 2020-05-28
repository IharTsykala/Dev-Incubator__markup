import React from "react"
import Beerdekel from "./Beerdekel/Beerdekel"
import Glass from "./Glass/Glass"

const GlassOnBeerdekel: React.FunctionComponent = () => {
  return (
    <div className={"cup-on-beerdekel"}>
      <Beerdekel />
      <Glass />
    </div>
  )
}

export default GlassOnBeerdekel
