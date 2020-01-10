import React, { Component, useEffect, useState } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import Axios from "axios";
import { render } from "react-dom";

export default class Weather extends Component {
  render() {
    return (
      <body>
        <div className="weather-container">
          <div className="weather-header">
            <div className="icon">
              <canvas id="icon" width="100" height="100"></canvas>
            </div>
          </div>
          <div className="content">
            <div className="general-info">
              <div className="status">Enter Location </div>
              <div className="location">To find Weather</div>
            </div>
            <div className="details-section">
              <div className="details">
                <div className="title">Wind</div>
                <div className="value">TBD</div>
              </div>
              <div className="details">
                <div className="title">Temperrature</div>
                <div className="value">TBD</div>
              </div>
              <div className="details">
                <div className="title">Percip</div>
                <div className="value">TBD</div>
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
          <a href="https://darksky.net/poweredby" className="darkSky_log">
            Powered By Dark Sky
          </a>
        </div>
      </body>
    );
  }
}

const searchElement = document.querySelector("[data-city-search]");

const searchBox = new google.maps.places.SearchBox(searchElement);
searchBox.addListener("places_changed", () => {
  const place = searchBox.getPlaces()[0];
  if (place == null) return;
  const latitude = place.geometry.location.lat();
  const longitude = place.geometry.location.lng();
  fetch("/weather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude
    })
  })
    .then(res => res.json())
    .then(data => {
      setWeatherData(data, place.formatted_address);
    });
});
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
