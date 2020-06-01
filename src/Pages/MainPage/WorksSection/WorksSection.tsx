import React from "react"
import Photos from "../../../Components/Photos/Photos"
import { connect } from "react-redux"
import { photoInterface } from "../../../Redux/InterfacesEntity/photo.interface"
import { setStateModalWindow } from "../../../Redux/store/photo/photo.actions"

type SearchProps = {
  listWorksPhoto: photoInterface[],
  currentPhoto: photoInterface,
  stateModal: boolean,
  dispatch: any,
}

const WorksSection: React.FunctionComponent<SearchProps> = ({
  listWorksPhoto,
  currentPhoto,
  stateModal,
  dispatch,
}) => {
  return (
    <section className={"works-section"}>
      {stateModal && (
        <div
          className={"modal-window"}
          onClick={() => dispatch(setStateModalWindow(false))}
        >
          <img
            className={"modal-window__photo"}
            src={currentPhoto.photoIMG}
            alt={currentPhoto.namePhoto}
          />
        </div>
      )}
      <div className={"works-section__header"}>
        <h2 className={"works-section__primary-header"}>featured works</h2>
        <h5 className={"works-section__secondary-header"}>
          Lorem ipsum dolor sit amet event landing template
        </h5>
      </div>
      <Photos
        arrayPhotos={listWorksPhoto}
        className={"our-works"}
        dispatch={dispatch}
      />
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  listWorksPhoto: state.photo.listWorksPhoto,
  currentPhoto: state.photo.currentPhoto,
  stateModal: state.photo.stateModal,
})

export default connect(mapStateToProps)(WorksSection)
