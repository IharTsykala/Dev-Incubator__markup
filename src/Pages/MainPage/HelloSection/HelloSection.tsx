import React from "react"
import GlassOnBeerdekel from "../../../Components/GlassOnBeerdekel/GlassOnBeerdekel"

// type SearchProps = {
//   dispatch: any,
// }

const HelloSection: React.FunctionComponent = () => {
  return (
    <section className={"hello-section"}>
      <GlassOnBeerdekel />
      {/*<div className={'hello-section__'}>*/}
      {/*  <h2></h2>*/}
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
      {/*</div>*/}
      {/*<div>*/}
      <button className={"hello-section__button"}>Contact Us</button>
      {/*</div>*/}
    </section>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default HelloSection
