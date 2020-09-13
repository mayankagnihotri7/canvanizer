import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import ReactMarkdown from "react-markdown";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import LeanCanvas from "./LeanCanvas";

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

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     header: "",
  //     side: "",
  //   };
  // }

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  render() {
    return (
      <>
        {/* <Header /> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/canvas" component={LeanCanvas} exact />
          {/* <Home /> */}
          <LeanCanvas />
        </Switch>
      </>
    );
  }
}

export default withStyles(styles)(App);
