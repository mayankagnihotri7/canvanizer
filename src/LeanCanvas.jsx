import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Problem from "./Problem";
import Solutions from "./Solutions";
import KeyMetrics from "./KeyMetrics";
import UnfairAdvantage from "./UnfairAdvantage";
import UniqueValue from "./UniqueValue";
import Channels from "./Channels";
import CustomerSegments from "./CustomerSegments";
import CodeStructure from "./CodeStructure";
import RevenueStreams from "./RevenueStreams";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

class LeanCanvas extends Component {
  constructor() {
    super();
    this.state = {
      header: "",
      side: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.root}>
          <div className="wrapper" style={{ marginTop: "3rem" }}>
            <Problem />
            <Solutions />
            <KeyMetrics />
            <UnfairAdvantage />
            <UniqueValue />
            <Channels />
            <CustomerSegments />
          </div>
          <div className="wrapper">
            <CodeStructure />
            <RevenueStreams />
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(LeanCanvas);
