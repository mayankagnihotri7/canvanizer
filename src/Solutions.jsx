import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export default class Solutions extends Component {
  constructor() {
    super();
    this.state = {
      solutions: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box box2">
        <h1>Solution</h1>
        <textarea
          type="text"
          placeholder="Enter markdown"
          name="solutions"
          value={this.state.solutions}
          onChange={this.handleChange}
        />
        <ReactMarkdown>{this.state.solutions}</ReactMarkdown>
      </div>
    );
  }
}
