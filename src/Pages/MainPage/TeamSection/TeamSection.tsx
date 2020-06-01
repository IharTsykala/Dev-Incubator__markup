import React from "react"
import Photos from "../../../Components/Photos/Photos"
import { connect } from "react-redux"
import { photoInterface } from "../../../Redux/InterfacesEntity/photo.interface"

type TeamSectionProps = {
  listTeamPhoto: photoInterface[],
}

const TeamSection: React.FunctionComponent<TeamSectionProps> = ({
  listTeamPhoto,
}) => {
  return (
    <section className={"team-section"}>
      <div className={"team-section__header"}>
        <h2 className={"team-section__primary-header"}>featured works</h2>
        <h5 className={"team-section__secondary-header"}>
          Lorem ipsum dolor sit amet event landing template
        </h5>
      </div>
      <Photos
        arrayPhotos={listTeamPhoto}
        className={"team-section-photos"}
        isInformationBlock={true}
      />
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  listTeamPhoto: state.photo.listTeamPhoto,
})

export default connect(mapStateToProps)(TeamSection)
