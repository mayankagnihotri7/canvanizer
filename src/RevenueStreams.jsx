import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export default class RevenueStreams extends Component {
  constructor() {
    super();
    this.state = {
      revenueStreams: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box box9">
        <h1>Revenue Streams</h1>
        <textarea
          type="text"
          placeholder="Enter markdown"
          name="revenueStreams"
          value={this.state.revenueStreams}
          onChange={this.handleChange}
        />
        <ReactMarkdown>{this.state.revenueStreams}</ReactMarkdown>
      </div>
    );
  }
}
