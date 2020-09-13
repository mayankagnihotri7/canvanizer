import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export default class CodeStructure extends Component {
  constructor() {
    super();
    this.state = {
      codeStructure: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box box8">
        <h1>Code Structure</h1>
        <textarea
          type="text"
          placeholder="Enter markdown"
          name="codeStructure"
          value={this.state.codeStructure}
          onChange={this.handleChange}
        />
        <ReactMarkdown>{this.state.codeStructure}</ReactMarkdown>
      </div>
    );
  }
}
