import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";

export default class Fails extends Component {
  render() {
    return (
      <div className="fails-page">
        <h1 className="fails-head">
          If you get stuck, get away from your desk. Take a walk, take a bath,
          go to sleep, make a pie, draw, listen to ­music, meditate, exercise;
          whatever you do, don't just stick there scowling at the problem. But
          don't make telephone calls or go to a party; if you do, other people's
          words will pour in where your lost words should be. Open a gap for
          them, create a space. Be patient.
        </h1>
        <div className="fails-container">
          <div className="video-links">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gbeZFI6Wcuc"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-links">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Bf7l59o4A9g"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-links">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5boZWjK-suQ"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-links">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Bf7l59o4A9g"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-links">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/T5yXVAj3-9o"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-links">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GV3XsqeoHU4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-links">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ap-FwDwoKnI"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
