import React from "react"
import Photos from "../../../Components/Photos/Photos"
import cake from "../../../assets/cake.png"
import businessCards from "../../../assets/businessCards.png"
import bottles from "../../../assets/bottles.png"
import book from "../../../assets/book.png"
import mathematik from "../../../assets/mathematik.png"
import healingTea from "../../../assets/healingTea.png"

const arrayOfWorks = [
  { namePhoto: "cake", photoIMG: cake },
  { namePhoto: "businessCards", photoIMG: businessCards },
  { namePhoto: "bottles", photoIMG: bottles },
  { namePhoto: "book", photoIMG: book },
  { namePhoto: "mathematik", photoIMG: mathematik },
  { namePhoto: "healingTea", photoIMG: healingTea },
]

const WorksSection: React.FunctionComponent = () => {
  return (
    <section className={"works-section"}>
      <div className={"works-section__header"}>
        <h2 className={"works-section__primary-header"}>featured works</h2>
        <h5 className={"works-section__secondary-header"}>
          Lorem ipsum dolor sit amet event landing template
        </h5>
      </div>
      <Photos arrayOfWorks={arrayOfWorks} className={"our-works"} />
    </section>
  )
}

export default WorksSection
