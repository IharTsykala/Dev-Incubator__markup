import React from "react"
import PopUp from "../PopUp/PopUp"

interface WorksInterface {
  namePhoto: string;
  photoIMG: string;
}

type OurWorksProps = {
  arrayOfWorks: [WorksInterface] | any,
  className: string,
  isPopUp?: boolean,
}

const Photos: React.FunctionComponent<OurWorksProps> = ({
  arrayOfWorks,
  className,
  isPopUp,
}) => {
  return (
    <ul className={className}>
      {arrayOfWorks.map((item: WorksInterface, index: number) => {
        return (
          <li className={`${className}__photo-container`}>
            {isPopUp && <PopUp name={item.namePhoto} />}
            <img
              className={`${className}__photo`}
              src={item.photoIMG}
              alt={item.namePhoto}
              key={index}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default Photos
