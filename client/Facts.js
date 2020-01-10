import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import axios from "axios";

export default class Facts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts: [],
      number: 0,
      pic: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.refresh = this.refresh.bind(this);
  }
  componentDidMount() {
    const url = "http://numbersapi.com/random";

    const data = axios.get(url).then(data => {
      this.setState({
        facts: [data.data]
      });
    });
  }
  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
      number: ev.target.value
    });
  }

  refresh() {
    const url = `http://numbersapi.com/${this.state.number}`;
    const data = axios
      .get(url)
      .then(data => {
        this.setState({
          facts: [data.data]
        });
      })
      .then(
        axios.get("https://picsum.photos/200/300").then(pic => {
          this.setState({
            pic: [pic.config.url]
          });
        })
      );
  }

  render() {
    return (
      <div className="the-facts">
        <h1 className="fact-page">Time you enjoy wasting is not wasted time</h1>
        <div className="facts">
          <h1> {this.state.number}</h1>
          <div className="conti">
            <input
              type="text"
              id="myText"
              placeholder="Pick a Number"
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.refresh}>
              GO!
            </button>
            <div id="texting">
              {this.state.facts &&
                this.state.facts.map((fact, index) => {
                  return (
                    <div key={index}>
                      <li>{fact}</li>
                      <img src={this.state.pic} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
