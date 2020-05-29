import React from "react"
import officePlace from "../../../assets/officePlace.png"

const AboutSection: React.FunctionComponent = () => {
  return (
    <section className={"about-section"}>
      <div className={"about-section__header"}>
        <h2 className={"about-section__primary-header"}>ABOUT US</h2>
        <h5 className={"about-section__secondary-header"}>
          Lorem ipsum dolor sit amet event landing template
        </h5>
      </div>
      <article className={"about-section__information"}>
        <img
          className={
            "about-section__photo about-section__photo_box-shadow_around"
          }
          src={officePlace}
          alt={"officePlace"}
        />
        <div className={"about-section__description"}>
          <h3 className={"about-section__description-header"}>
            We Actually Do amazing works
          </h3>
          <p className={"about-section__description-text"}>
            A visual approach is an approach to a runway at an airport conducted
            under instrument flight rules. The pilot must at all times have
            either the airport or the preceding aircraft in approach correct
            sight. conducted under instrument flight rules. The pilot must at
            all times.
          </p>
          <p className={"about-section__description-text"}>
            Preceding aircraft in approach correct sight. conducted under
            instrument flight rules.
          </p>
          <h3 className={"about-section__description-header"}>
            Why we are the great?
          </h3>
          <p className={"about-section__description-text"}>
            A visual approach is an approach to a runway at an airport conducted
            under instrument flight rules. The preceding aircraft in approach
            correct sight.
          </p>
        </div>
      </article>
    </section>
  )
}

export default AboutSection
