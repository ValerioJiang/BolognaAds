import React, { Component } from "react";


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet'
import Container from "react-bootstrap/esm/Container";

const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

export default class AdsMapLocation extends Component {
  
  state = {
    positions: [{
    center: [51.505, -0.091],
    zoom: 13
    },
    {
      center: [52.505, -0.091],
    zoom: 13
    }
    ]
  };

  /*
  constructor(props) {
    super(props);
    this.state = {
      cartelloni: props.cartelloni
    }

    const cartMap = this.state.cartelloni.map(
      
    )
    
  }
  */



  render() {
    return (
      
      <div style={{height: "100%"}}>
      <MapContainer style={{ height: "100%", width: "100%", position:"fixed" }} center={this.state.positions[0].center} zoom={this.state.positions[0].zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <Marker
       icon={customMarker}
       position={this.state.positions[0].center}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>

    <Marker
       icon={customMarker}
       position={this.state.positions[1].center}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    </MapContainer>
    </div>
    );
  }
}
