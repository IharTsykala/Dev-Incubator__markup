import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

interface center {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: "100%",
  height: "100%",
}

const zoom = 15

type MapProps = {
  center: center,
  googleMapsApiKey: string,
}

const Map: React.FunctionComponent<MapProps> = ({
  center,
  googleMapsApiKey,
}) => {
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
