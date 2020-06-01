import React from "react"
import InformationBlock from "../InformationBlock/InformationBlock"
import { photoInterface } from "../../Redux/InterfacesEntity/photo.interface"

type OurWorksProps = {
  arrayPhotos: photoInterface[],
  className: string,
  isInformationBlock?: boolean,
}

const Photos: React.FunctionComponent<OurWorksProps> = ({
  arrayPhotos,
  className,
  isInformationBlock,
}) => {
  return (
    <ul className={className}>
      {arrayPhotos.map((item: photoInterface, index: number) => {
        return (
          <li className={`${className}__photo-container`} key={index}>
            {isInformationBlock && (
              <InformationBlock
              // nameProps={item.namePhoto}
              // classNameProps={className}
              />
            )}
            <img
              className={`${className}__photo`}
              src={item.photoIMG}
              alt={item.namePhoto}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Photos
