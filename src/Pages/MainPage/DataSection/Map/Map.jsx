import React from "react"
import { compose, withProps } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDDuAn5EN9v9O3dVjMPXP-vnV4MyowsY4w",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 53.901634, lng: 27.545265 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: 53.901634, lng: 27.545265 }} />
    )}
  </GoogleMap>
))

export default MyMapComponent
