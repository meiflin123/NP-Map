import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { GOOGLE_MAP_KEY,NATIONAL_PARK_SERVICE_KEY } from '../config/api';
import axios from 'axios';
import SearchBar from './SearchBar';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class ParksOnMap extends React.Component {

  state = {
    showingInfoWindow: false,  
    activeMarker: {},       
    selectedPlace: {},
    parks: []

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
    // fetch all parks of one state from National Park Service
    // filter data --> only national parks.
    // store found national parks to state obj.
    const response = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${NATIONAL_PARK_SERVICE_KEY}`)
    const keywords = ["National Park", "National and State Parks", "National Parks"];
    const nationalParks = response.data.data.filter(park => keywords.includes(park.designation));
                          
    this.setState({ parks: nationalParks });
    console.log(this.state.parks);
  }

  findLat = str => { //ex str: 'latLong: "lat:41.37237268, long:-124.0318129"/'
    let lat = str.split(' ')[0].slice(4, -1);
    console.log(lat)
    return lat;
  }

  findLong = str => {
    let long = str.split(' ')[1].slice(5);
    console.log(long)
    return long;
  }

  handleSearch = async term => {
    // get the park user's looking for from stored data
    // close InfoWindow of previous query, display only the searched park on map
    // display all parks again
    const singlePark = this.state.parks.filter(park => park.name === term || park.fullName === term);
    await this.setState({ parks: singlePark, showingInfoWindow: false});  
    this.fetchParks('CA');
  }

  getWeather = async location => {
    const response = await axios.get(`https://robohash.org/${location}.png`)
    console.log(response.data)
  }

  componentDidMount = () => {
    this.fetchParks('CA');
  }

  render() {
    const {name, states, directionsInfo, url} = this.state.selectedPlace;

    return (
     
      <div className="ParksOnMap container">
        <SearchBar handleSearch={this.handleSearch} parks={this.state.parks}/>
        <Map 
          google={ this.props.google }
          zoom={ 6 }
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
              position={{lat: this.findLat(park.latLong), lng:this.findLong(park.latLong) }}
            
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
      </div>
    
    );
  }

};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_KEY
})(ParksOnMap);
