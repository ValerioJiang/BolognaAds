
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import HomeComponent from "./components/HomeComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdsComponent from "./components/Ads/AdsComponent";
import AdsMapLocation from "./components/Ads/AdsMapLocationComponent";
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import PrenotazioneComponent from "./components/PrenotazioneComponent";


export default class App extends Component {
  //<Route path="/" exact component={} />
  render() {
    return (
      <Router>
        <NavbarComponent />
        <Route path="/" exact component={HomeComponent} />
        <Route path="/ads" exact component={AdsComponent} />
        <Route path="/adsMapLocation" exact component={AdsMapLocation} />
        <Route path="/ads/:id/prenotazione" component={PrenotazioneComponent} />
       

      </Router>
    );
  }
}
