import React, { Component, useEffect, useState } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import { render } from "react-dom";

export default class ChuckNorris extends Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    };
  }
  componentDidMount() {
    const url = "https://api.chucknorris.io/jokes/random";
    const data = axios
      .get(url)
      .then(data => data.data.value)
      .then(data => {
        this.setState({
          jokes: [...this.state.jokes, data]
        });
      });
  }
  refresh() {
    window.location.reload();
  }

  render() {
    return (
      <div className="chuck_page">
        <h1 className="fails-head">chuck norris page title</h1>
        <img
          src={
            "https://images-na.ssl-images-amazon.com/images/I/51IY4ohvfUL.jpg"
          }
        />
        <div className="chuck_con">
          <button type="button" onClick={this.refresh}>
            Click to get a new Joke
          </button>
          <h2 className="jokes">
            {" "}
            Here you go:
            {this.state.jokes &&
              this.state.jokes.map(joke => {
                return <li key={joke}>{joke}</li>;
              })}
          </h2>
        </div>
      </div>
    );
  }
}
