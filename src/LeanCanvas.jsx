import React, { Component } from "react";
import Problem from "./Problem";
import Solutions from "./Solutions";
import KeyMetrics from "./KeyMetrics";
import UnfairAdvantage from "./UnfairAdvantage";
import UniqueValue from "./UniqueValue";
import Channels from "./Channels";
import CustomerSegments from "./CustomerSegments";
import CodeStructure from "./CodeStructure";
import RevenueStreams from "./RevenueStreams";
import { NavLink } from "react-router-dom";

class LeanCanvas extends Component {
  render() {
    return (
      <>
        <div style={{ padding: "7.25rem 0" }}>
          <div className="wrapper">
            <Problem />
            <Solutions />
            <KeyMetrics />
            <UnfairAdvantage />
            <UniqueValue />
            <Channels />
            <CustomerSegments />
          </div>
          <div className="wrapper" style={{marginTop: "4px"}}>
            <CodeStructure />
            <RevenueStreams />
          </div>
          <button className="take-me-home-btn">
            <NavLink to="/">Take me home</NavLink>
          </button>
        </div>
      </>
    );
  }
}

export default LeanCanvas;
