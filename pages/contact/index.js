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
        <h1 className="text-center my-5" style={{backgroundColor: "#f5da2a", fontFamily: "'Oswald', sans-serif;"}}>
            Contact Us
        </h1>
        <div className="position">
        <img
        className="contact"
        src={require('../../images/contact.jpg')} 
        alt="contact"
        />
        </div>
        <br/>
        <h1 className="text-center my-5" style={{backgroundColor: "#f5da2a", fontFamily: "'Oswald', sans-serif;"}}>You Can Find Us Here</h1>
        <h3 className="text-center" style={{fontFamily: "'Oswald', sans-serif;"}}>Click the Map To Locate</h3>
        <br/>
        <div className="position">
        <a href="https://www.google.com/maps/place/GLEAN+DENTAL+CLINIC/@14.6078308,121.0026778,19z/data=!4m5!3m4!1s0x3397b741b379b477:0xd86b92c76387b7b!8m2!3d14.6080449!4d121.0031043" target="_blank">
        <img
        className="contact"
        src={require('../../images/map.png')}
        alt="map"
        />
        </a>
        </div>
        </>
    )
}

export default index
