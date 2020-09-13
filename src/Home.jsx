import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="background-home">
        <div className="position">
          <h1 className="home-heading">Welcome to Canvanizer</h1>
          <button className="home-btn">
            <NavLink to="/canvas">Create Lean Canvas</NavLink>
          </button>
        </div>
      </div>
    );
  }
}
