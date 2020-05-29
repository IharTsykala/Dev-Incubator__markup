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
          <>
            {isPopUp && <PopUp />}
            <img
              className={`${className}__photo`}
              src={item.photoIMG}
              alt={item.namePhoto}
              key={index}
            />
          </>
        )
      })}
    </ul>
  )
}

export default Photos
