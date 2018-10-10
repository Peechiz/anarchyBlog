import { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render(){
    const latlang = {
      lat: 30.259150,
      lng: -97.723201
    }
    return (
      <Map
        className="map"
        google={this.props.google}
        initialCenter={latlang}
        zoom={16}>
        <Marker 
          title={"Our outdoor practice space"}
          name={'ATX Anarchy'}
          position={latlang}/>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAxezSt_K--0CkD3Xw377_ebAuNw3jp1MM'
})(MapContainer)