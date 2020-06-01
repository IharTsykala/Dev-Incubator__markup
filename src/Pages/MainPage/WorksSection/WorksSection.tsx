import React from "react"
import Photos from "../../../Components/Photos/Photos"
import { connect } from "react-redux"
import { photoInterface } from "../../../Redux/InterfacesEntity/photo.interface"

type SearchProps = {
  listWorksPhoto: photoInterface[],
}

const WorksSection: React.FunctionComponent<SearchProps> = ({
  listWorksPhoto,
}) => {
  return (
    <section className={"works-section"}>
      <div className={"works-section__header"}>
        <h2 className={"works-section__primary-header"}>featured works</h2>
        <h5 className={"works-section__secondary-header"}>
          Lorem ipsum dolor sit amet event landing template
        </h5>
      </div>
      <Photos arrayPhotos={listWorksPhoto} className={"our-works"} />
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  listWorksPhoto: state.photo.listWorksPhoto,
})

export default connect(mapStateToProps)(WorksSection)
