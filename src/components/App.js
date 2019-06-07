import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { GOOGLE_MAP_KEY,NATIONAL_PARK_SERVICE_KEY } from '../config/api';
import axios from 'axios';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class App extends React.Component {

  state = {
    showingInfoWindow: false,  
    activeMarker: {},       
    selectedPlace: {},
    parks: [],
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

  fetchParks = async state => {
    const response = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${NATIONAL_PARK_SERVICE_KEY}`)
    const keywords = ["National Park", "National and State Parks", "National Parks"];
    const nationalParks = response.data.data.filter(park => keywords.includes(park.designation));
                          
    this.setState({ parks: nationalParks });
    console.log(this.state.parks);
  }

  findLat = str => {
    return str.split(' ')[0].slice(4, -1);
  }

  findLong = str => {
    return str.split(' ')[1].slice(5);
  }

  componentDidMount = () => {
    this.fetchParks('CA');
  }

  render() {
    const {name, states, directionsInfo, url} = this.state.selectedPlace;

    return (
      <Map
        google={ this.props.google }
        zoom={ 5 }
        style={ mapStyles }
        initialCenter={{
         lat: 35.16,
         lng: -117.87
        }}
      >
        { this.state.parks.map(park => 
          <Marker
            key={ park.id }
            onClick={ this.onMarkerClick }
            name={ park.fullName }
            states={ park.states }
            directionsInfo={ park.directionsInfo }
            url={ park.url }     
            position={{ lat: this.findLat(park.latLong), lng:this.findLong(park.latLong) }}
          />)
        }
        <InfoWindow
          marker={ this.state.activeMarker }
          visible={ this.state.showingInfoWindow }
          onClose={ this.onClose }
        >
          <div>
            <h4>{ name }, { states }</h4>
              <p><h4>{ directionsInfo }</h4></p>
              <a href={ url }>Website</a>
          </div>
        </InfoWindow>
      </Map>
    );
  }

};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_KEY
})(App);

