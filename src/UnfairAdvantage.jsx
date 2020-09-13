import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export default class UnfairAdvantage extends Component {
  constructor() {
    super();
    this.state = {
      unfairAdvantage: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box box6">
        <h1>Unfair Advantage</h1>
        <textarea
          type="text"
          placeholder="Enter markdown"
          name="unfairAdvantage"
          value={this.state.unfairAdvantage}
          onChange={this.handleChange}
        />
        <ReactMarkdown>{this.state.unfairAdvantage}</ReactMarkdown>
      </div>
    );
  }
}
