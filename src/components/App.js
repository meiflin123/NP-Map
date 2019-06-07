import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_MAP_KEY,NATIONAL_PARK_SERVICE_KEY } from '../config/api';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class App extends React.Component {

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 37.774929,
         lng: -122.419416
        }}
      />
    );
  }


};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_KEY
})(App);

