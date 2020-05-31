import React from "react"
import InformationBlock from "../InformationBlock/InformationBlock"

interface WorksInterface {
  namePhoto: string;
  photoIMG: string;
}

type OurWorksProps = {
  arrayOfWorks: [WorksInterface] | any,
  className: string,
  isInformationBlock?: boolean,
}

const Photos: React.FunctionComponent<OurWorksProps> = ({
  arrayOfWorks,
  className,
  isInformationBlock,
}) => {
  return (
    <ul className={className}>
      {arrayOfWorks.map((item: WorksInterface, index: number) => {
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
