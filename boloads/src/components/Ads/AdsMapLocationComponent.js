import React, { Component } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

/**
 * TODO: popolare altre location e migliorare popup
 */

const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

export default class AdsMapLocation extends Component {
  constructor() {
    super();
    this.state = {
      positions: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(`http://localhost:8080/cartellone/`);
    const json = await response.json();
    this.setState({ positions: json });
    console.log(this.state);

    
  }

  markerList(){
    const posData = this.state.positions.map((n) => (
      <Marker
        key={n.id}
        icon={customMarker}
        position={[n.latitudine, n.longitudine]}
      >
        <Popup>
          <p> id: {n.id}  </p>
          <p> tipo: {n.tipologia} </p>
          <p> indirizzo:{n.indirizzo}  </p>
          <Link to={"ads/"+n.id+"/prenotazione"}>
            <Button variant="primary">Prenota</Button>
            </Link>
        </Popup>
      </Marker>
    ));
    
    console.log(posData)
    return posData
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <MapContainer
          style={{ height: "100%", width: "100%", position: "fixed" }}
          center={[44.4953075311209, 11.342994666697493]}
          zoom={13}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />

          <Marker
            icon={customMarker}
            position={[44.4953075311209, 11.342994666697493]} //piazza maggiose
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>

          {this.markerList()}
        </MapContainer>
      </div>
    );
  }
}
