import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import { mapCenter } from "../../../../Redux/InterfacesEntity/mapCenter.interface"

const containerStyle = {
  width: "100%",
  height: "100%",
}

const zoom = 15

type MapProps = {
  mapCenter: mapCenter,
  googleMapsApiKey: string,
}

const Map: React.FunctionComponent<MapProps> = ({
  mapCenter,
  googleMapsApiKey,
}) => {
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={zoom}
      >
        <Marker position={mapCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
