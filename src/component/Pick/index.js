import React, { Component } from "react";
import "./index.css";
//User interactions have no effect because an <input> with value prop is considered as controlled
class Pick extends Component {
  constructor() {
    super();
    this.state = {
      red: 128,
      green: 128,
      blue: 128,
      alpha: 0.5
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const styletext = {
      backgroundColor: `rgba(${this.state.red}, ${this.state.green}, ${
        this.state.blue
      }, ${this.state.alpha})`
    };
    return (
      <div style={styletext} className="outer">
        <div className="adder" />
        <div className="container">
          <div>
            <p>
              Red:
              {this.state.red}
            </p>
            <input
              type="range"
              min="0"
              max="255"
              name="red"
              value={this.state.red}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <p>
              Green:
              {this.state.green}
            </p>
            <input
              type="range"
              min="0"
              max="255"
              name="green"
              value={this.state.green}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <p>
              Blue:
              {this.state.blue}
            </p>
            <input
              type="range"
              min="0"
              max="255"
              name="blue"
              value={this.state.blue}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <p>
              Alpha:
              {this.state.alpha}
            </p>
            <input
              type="range"
              min="0"
              max="1"
              name="alpha"
              value={this.state.alpha}
              onChange={this.handleChange}
              step="0.01"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Pick;
