import React from "react"

type PopUpProps = {
  name: string,
}

const PopUp: React.FunctionComponent<PopUpProps> = ({ name }) => {
  return (
    <div className={"popUp"}>
      <h3 className={"popUp__header"}>
        {name} <span className={"popUp__header-span"}> / UI Disainer</span>
      </h3>
      <p className={"popUp-text"}>
        Lorem Ipsum is not simply is an action designer random text It has roots
        in a piece.{" "}
      </p>
    </div>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default PopUp
