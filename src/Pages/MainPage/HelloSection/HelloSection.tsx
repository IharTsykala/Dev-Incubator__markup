import React from "react"
import GlassOnBeerdekel from "../../../Components/GlassOnBeerdekel/GlassOnBeerdekel"

const HelloSection: React.FunctionComponent = () => {
  return (
    <section className={"hello-section"}>
      <GlassOnBeerdekel />
      <h2
        className={
          "hello-section__header hello-section__header_text-shadow_bottom"
        }
      >
        Say Hello to{" "}
        <mark className={"hello-section__header_mark_green"}>SHOPNO!</mark>
        <br />
        <mark className={"hello-section__header_mark_green"}>Agency</mark>{" "}
        CORPORATE SHOPNO Theme
      </h2>
      <button className={"contact-us-button"}>Contact Us</button>
    </section>
  )
}

export default HelloSection
