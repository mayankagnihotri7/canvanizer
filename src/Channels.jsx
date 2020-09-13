import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export default class Channels extends Component {
  constructor() {
    super();
    this.state = {
      channels: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box box4">
        <h1>Channels </h1>
        <textarea
          type="text"
          placeholder="Enter markdown"
          name="channels"
          value={this.state.channels}
          onChange={this.handleChange}
        />
        <ReactMarkdown>{this.state.channels}</ReactMarkdown>
      </div>
    );
  }
}
