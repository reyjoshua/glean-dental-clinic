import React from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'

function Map () {
    return <GoogleMap
      defaultZoom={15}
      defaultCenter={{lat: 14.60827329397017, lng: 121.00305065368856}}
      >
      <Marker position={ {lat: 14.60827329397017, lng: 121.00305065368856} } />
    </GoogleMap>
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

function index() {
    return (
        <>
        <h1 className="text-center my-5">
            Contact Us
        </h1>
        <div className="contact"></div>
        <br/>
        <h1 className="text-center my-5">You Can Find Us Here</h1>
        <br/>
        <div  style={{ marginLeft: "500px", width: "50vw", height: "100vh" }}>
            <WrappedMap 
            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCDVQfKOoC3jzyj732cq68XIjWkODg_1BI"}
            loadingElement={<div style={{ height: `70%` }} />}
            containerElement={<div style={{ height: `70%` }} />}
            mapElement={<div style={{ height: `70%` }} />}
            />
        </div>
        </>
    )
}

export default index
