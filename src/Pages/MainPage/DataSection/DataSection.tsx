import React from "react"

// type SearchProps = {
//   dispatch: any,
// }

const DataSection: React.FunctionComponent = () => {
  return (
    <section className={"data-section"}>
      <form className={"form-private-data"}>
        <input className={"form-private-data__input"} />
        <input className={"form-private-data__input"} />
        <input className={"form-private-data__input"} />
        <input className={"form-private-data__input"} />
        <button className={"form-private-data__button"} />
      </form>
      <article className={"our-contacts"}>
        <div className={"our-contacts__address-phone"}>
          <p className={"our-contacts__text"}></p>
          <p className={"our-contacts__text"}></p>
          <p className={"our-contacts__text"}></p>
          <p className={"our-contacts__text"}></p>
        </div>
        <div className={"our-contacts__internet"}>
          <p className={"our-contacts__text"}></p>
          <p className={"our-contacts__text"}></p>
        </div>
        <img className={"our-contacts__internet"} />
      </article>
    </section>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default DataSection
