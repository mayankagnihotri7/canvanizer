import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export default class Problem extends Component {
  constructor() {
    super();
    this.state = {
      problems: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box box1">
        <h1>Problem</h1>
        <textarea
          type="text"
          placeholder="Enter markdown"
          name="problems"
          value={this.state.problems}
          onChange={this.handleChange}
        />
        <ReactMarkdown>{this.state.problems}</ReactMarkdown>
      </div>
    );
  }
}
