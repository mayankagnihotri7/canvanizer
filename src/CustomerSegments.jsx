import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export default class CustomerSegments extends Component {
  constructor() {
    super();
    this.state = {
      customerSegments: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box box5">
        <h1>Customer Segments</h1>
        <textarea
          type="text"
          placeholder="Enter markdown"
          name="customerSegments"
          value={this.state.customerSegments}
          onChange={this.handleChange}
        />
        <ReactMarkdown>{this.state.customerSegments}</ReactMarkdown>
      </div>
    );
  }
}
