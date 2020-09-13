import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export default class UniqueValue extends Component {
  constructor() {
    super();
    this.state = {
      uniqueValue: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box box3">
        <h1>Unique Value Proposition</h1>
        <textarea
          type="text"
          placeholder="Enter markdown"
          name="uniqueValue"
          value={this.state.uniqueValue}
          onChange={this.handleChange}
        />
        <ReactMarkdown>{this.state.uniqueValue}</ReactMarkdown>
      </div>
    );
  }
}
