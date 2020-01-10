import React, { Component, useEffect, useState } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import Axios from "axios";
import { render } from "react-dom";

export default class Weather extends Component {
  render() {
    return (
      <div className="body_con">
        <div className="container">
          <div className="header">
            <div className="icon-container">
              <canvas id="icon" width="100" height="100"></canvas>
            </div>
          </div>
          <div className="content">
            <div className="general-information">
              <div className="status" data-status>
                Enter A Location
              </div>
              <div className="location" data-location>
                To Find The Weather
              </div>
            </div>
            <div className="detail-section">
              <div className="detail">
                <div className="title">Wind</div>
                <div className="value" data-wind>
                  TBD
                </div>
              </div>
              <div className="detail bordered">
                <div className="title">Temperature</div>
                <div className="value" data-temperature>
                  TBD
                </div>
              </div>
              <div className="detail">
                <div className="title">Precipitation</div>
                <div className="value" data-precipitation>
                  TBD
                </div>
              </div>
            </div>
            <div className="city-search-container">
              <input
                type="text"
                className="city-search"
                data-city-search
                placeholder="Enter Location"
              />
            </div>
          </div>
        </div>
        <a href="https://darksky.net/poweredby" className="darksky-logo">
          Powered By Dark Sky
        </a>
      </div>
    );
  }
}

// create state variables
// constructor() {
//   super();
//   this.state = {
//     zip: 0,
//     coordinates: {
//       latitude: 0,
//       longitude: 0
//     },
//     weather: {}
//   };
// }

// const [zip, setZip] = useState(0);
// const [coordinates, setCoords] = useState({
//   latitude: 0,
//   longitude: 0
// });
// const [weather, setWeather] = useState({});

// event handler
// handleZipSubmit() {
//   console.log("zip is: ", this.state.zip);
//   this.requestCoordinates();
//   console.log("coordinates is: ", this.state.coordinates);
//   this.requestWeather();
// }

// state update functions
// requestCoordinates() {
//   const LOCATION_API_PATH =
//     "https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=";
//   const { data } = Axios.get(LOCATION_API_PATH + this.state.zip);
//   console.log("Location data: ", data);
//   this.setState(prevState => {
//     return {
//       ...prevState,
//       coordinates: {
//         latitude: data.records[0].fields.latitude,
//         longitude: data.records[0].fields.longitude
//       }
//     };
//   });
// setCoords({
//   latitude: data.records.fields.latitude,
//   longitude: data.records.fields.longitude
// });
// }

// requestWeather() {
//   const WEATHER_API_PATH = `https://api.darksky.net/forecast/${process.env.DARK_SKY_SECRET}/${this.state.coordinates.latitude},${this.state.coordinates.longitude}`;
//   const { data } = Axios.get(WEATHER_API_PATH);
//   console.log("Weather data: ", data);
//   this.setState(prevState => {
//     return {
//       ...prevState,
//       weather: data
//     };
//   });
//   // setWeather(data);
// }
