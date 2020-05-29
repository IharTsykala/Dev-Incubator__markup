import React from "react"

interface WorksInterface {
  namePhoto: string;
  photoIMG: string;
}

type OurWorksProps = {
  arrayOfWorks: [WorksInterface] | any,
  className: string,
}

const Photos: React.FunctionComponent<OurWorksProps> = ({
  arrayOfWorks,
  className,
}) => {
  return (
    <ul className={className}>
      {arrayOfWorks.map((item: WorksInterface, index: number) => {
        return (
          <img
            className={`${className}__photo`}
            src={item.photoIMG}
            alt={item.namePhoto}
            key={index}
          />
        )
      })}
    </ul>
  )
}

export default Photos
