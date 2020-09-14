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

class LeanCanvas extends Component {
  render() {
    return (
      <>
        <div style={{ padding: "12.29rem 0" }}>
          <div className="wrapper">
            <Problem />
            <Solutions />
            <KeyMetrics />
            <UnfairAdvantage />
            <UniqueValue />
            <Channels />
            <CustomerSegments />
          </div>
          <div className="wrapper" style={{ marginTop: "4px" }}>
            <CodeStructure />
            <RevenueStreams />
          </div>
        </div>
      </>
    );
  }
}

export default LeanCanvas;
