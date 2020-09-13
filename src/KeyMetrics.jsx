import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export default class KeyMetrics extends Component {
  constructor() {
    super();
    this.state = {
      keyMetrics: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box box7">
        <h1>Key Metrics</h1>
        <textarea
          type="text"
          placeholder="Enter markdown"
          name="keyMetrics"
          value={this.state.keyMetrics}
          onChange={this.handleChange}
        />
        <ReactMarkdown>{this.state.keyMetrics}</ReactMarkdown>
      </div>
    );
  }
}
