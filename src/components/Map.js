import React, { Component } from 'react';
import { InfoWindow,Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '70%',
  position: 'contained',
};

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
     return (
       <Map
         id="map"
         google={this.props.google}
         zoom={12}
         style={mapStyles}
         initialCenter={{
          lat: -1.9706,
          lng: 30.1044
         }}
       >
       <Marker
        onClick={this.onMarkerClick}
        name={'African Leadership University'}
        position={{
          lat:-1.951499, lng: 30.093012}}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
     );
   }
 }

 export default GoogleApiWrapper({
   apiKey: 'AIzaSyAvOrHV6khC62g8fEuiExotGDSVBBGxPOA',
 })(MapContainer);
