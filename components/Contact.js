import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

function Contact() {

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={20}
            defaultCenter={{ lat: 14.608211001947982, lng: 121.00317939971409 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: 14.608211001947982, lng: 121.00317939971409 }} />}
        </GoogleMap>
    ))

    return (
        <div className="text-center contact">
            <h1>Contact Us</h1>
            <img class="contact-image"/>
            <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                />
        </div>
    )
}

export default Contact
