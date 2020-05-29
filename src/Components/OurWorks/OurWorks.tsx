import React from "react"

interface WorksInterface {
  namePhoto: string;
  photoIMG: string;
}

type OurWorksProps = {
  arrayOfWorks: [WorksInterface] | any,
}

const OurWorks: React.FunctionComponent<OurWorksProps> = ({ arrayOfWorks }) => {
  return (
    <ul className={"our-works"}>
      {arrayOfWorks.map((item: WorksInterface, index: number) => {
        return (
          <img
            className={"our-works__photo"}
            src={item.photoIMG}
            alt={item.namePhoto}
            key={index}
          />
        )
      })}
    </ul>
  )
}

export default OurWorks
