import React from "react"
import InformationBlock from "../InformationBlock/InformationBlock"
import { photoInterface } from "../../Redux/InterfacesEntity/photo.interface"
import {
  setCurrentPhoto,
  setStateModalWindow,
} from "../../Redux/store/photo/photo.actions"

type OurWorksProps = {
  arrayPhotos: photoInterface[],
  className: string,
  isInformationBlock?: boolean,
  dispatch?: any,
}

const Photos: React.FunctionComponent<OurWorksProps> = ({
  arrayPhotos,
  className,
  isInformationBlock,
  dispatch,
}) => {
  return (
    <ul className={className}>
      {arrayPhotos.map((item: photoInterface, index: number) => {
        return (
          <li className={`${className}__photo-container`} key={index}>
            {isInformationBlock && <InformationBlock />}
            <img
              className={`${className}__photo`}
              src={item.photoIMG}
              alt={item.namePhoto}
              onClick={() => {
                className === "our-works" &&
                  dispatch(setCurrentPhoto(item)) &&
                  dispatch(setStateModalWindow(true))
              }}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Photos
