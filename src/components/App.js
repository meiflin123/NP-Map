import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { GOOGLE_MAP_KEY,NATIONAL_PARK_SERVICE_KEY } from '../config/api';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class App extends React.Component {

  state = {
    showingInfoWindow: false,  
    activeMarker: {},       
    selectedPlace: {} 
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  render() {
    return (
      <Map
        google={ this.props.google }
        zoom={ 14 }
        style={ mapStyles }
        initialCenter={{
         lat: 37.774929,
         lng: -122.419416
        }}
      >

        <Marker
          onClick={ this.onMarkerClick }
          name={ 'San Francisco' }

        />
        <InfoWindow
              marker={ this.state.activeMarker }
              visible={ this.state.showingInfoWindow }
              onClose={ this.onClose }
        >
          <div>
            <h4>{ this.state.selectedPlace.name }</h4>         
          </div>
        </InfoWindow>
      </Map>
    );
  }

};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_KEY
})(App);

