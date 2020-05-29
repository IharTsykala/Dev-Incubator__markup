import React from "react"
import Photos from "../../../Components/Photos/Photos"
import womanWithGlasses from "../../../assets/womanWithGlasses.png"
import manWithoutBeard from "../../../assets/manWithoutBeard.png"
import manWithSmallBeard from "../../../assets/manWithSmallBeard.png"
import manWithBigBeard from "../../../assets/manWithBigBeard.png"
import womanWithoutGlasses from "../../../assets/womanWithoutGlasses.png"

const arrayOfWorks = [
  { namePhoto: "womanWithGlasses", photoIMG: womanWithGlasses },
  { namePhoto: "manWithoutBeard", photoIMG: manWithoutBeard },
  { namePhoto: "manWithSmallBeard", photoIMG: manWithSmallBeard },
  { namePhoto: "manWithBigBeard", photoIMG: manWithBigBeard },
  { namePhoto: "womanWithoutGlasses", photoIMG: womanWithoutGlasses },
  { namePhoto: "womanWithGlasses", photoIMG: womanWithGlasses },
]

// type SearchProps = {
//   dispatch: any,
// }

const TeamSection: React.FunctionComponent = () => {
  return (
    <section className={"team-section"}>
      <div className={"team-section__header"}>
        <h2 className={"team-section__primary-header"}>featured works</h2>
        <h5 className={"team-section__secondary-header"}>
          Lorem ipsum dolor sit amet event landing template
        </h5>
      </div>
      <Photos arrayOfWorks={arrayOfWorks} className={"our-team"} isPopUp={true} />
    </section>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default TeamSection
