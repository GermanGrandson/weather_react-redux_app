import React, {Component } from 'react';

class GoogleMap extends Component{
  componentDidMount(){
    new google.maps.Map(this.refs.map, { // This is generally how third party librarys are called in React
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render(){
    return(
      <div ref="map" />
    )
  }
}

export default GoogleMap;
