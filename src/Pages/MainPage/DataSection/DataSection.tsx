import React from "react"

// type SearchProps = {
//   dispatch: any,
// }

const DataSection: React.FunctionComponent = () => {
  return (
    <section className={"data-section"}>
      <form className={"form-private-data"}>
        <input
          className={"form-private-data__input"}
          type="text"
          placeholder="Name"
          required={true}
        />
        <input
          className={"form-private-data__input"}
          type="text"
          placeholder="Subject"
          required={true}
        />
        <input
          className={"form-private-data__input"}
          type="text"
          placeholder="E-mail"
          required={true}
        />
        <textarea
          className={"form-private-data__input"}
          cols={30}
          rows={5}
          placeholder="Message"
        />
        <button className={"form-private-data__button"}> Send Message</button>
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
