import React from "react"
import HelloSection from "./HelloSection/HelloSection"
import AboutSection from "./AboutSection/AboutSection"
import WorksSection from "./WorksSection/WorksSection"
import TeamSection from "./TeamSection/TeamSection"
import DataSection from "./DataSection/DataSection"

// type SearchProps = {
//   dispatch: any,
// }

const MainPage: React.FunctionComponent = () => {
  return (
    <div className={"main-page"}>
      <HelloSection />
      <AboutSection />
      <WorksSection />
      <TeamSection />
      <DataSection />
    </div>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default MainPage
