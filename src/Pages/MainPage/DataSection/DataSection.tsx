import React from "react"
import Map from "./Map/Map"
import { mapCenter } from "../../../Redux/InterfacesEntity/mapCenter.interface"

const center = {
  lat: 53.901634,
  lng: 27.545265,
}

type DataSectionProps = {
  mapCenter: mapCenter,
}

const DataSection: React.FunctionComponent<DataSectionProps> = ({
  mapCenter,
}) => {
  return (
    <section className={"data-section"}>
      <form className={"form-private-data"}>
        <input
          className={"form-private-data__input"}
          type="text"
          placeholder="Name*"
          required={true}
        />
        <input
          className={"form-private-data__input"}
          type="text"
          placeholder="Subject*"
          required={true}
        />
        <input
          className={"form-private-data__input"}
          type="text"
          placeholder="E-mail*"
          required={true}
        />
        <textarea
          className={"form-private-data__textarea"}
          cols={30}
          rows={5}
          placeholder="Message"
        />
        <button className={"form-private-data__button"}> Send Message</button>
      </form>
      <article className={"our-contacts"}>
        <div className={"our-contacts__address-phone"}>
          <p className={"our-contacts__text"}>Address Line1</p>
          <p className={"our-contacts__text"}>Address Line1</p>
          <p className={"our-contacts__text"}>Phone: +548 945645</p>
          <p className={"our-contacts__text"}>Fax: +456456 54546</p>
        </div>
        <div className={"our-contacts__internet"}>
          <p className={"our-contacts__text"}>Web: www.designagency.net</p>
          <p className={"our-contacts__text"}>E-mail: info@designagency.net</p>
        </div>
        <div className={"our-contacts__text"}>
          <Map
            mapCenter={mapCenter}
            googleMapsApiKey={"AIzaSyDDuAn5EN9v9O3dVjMPXP-vnV4MyowsY4w"}
          />
        </div>
      </article>
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  mapCenter: state.mapCenter.mapCenter,
})

export default DataSection

//AIzaSyDDuAn5EN9v9O3dVjMPXP-vnV4MyowsY4w  -- Key Map API
