import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import LeanCanvas from "./LeanCanvas";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/canvas" component={LeanCanvas} exact />
          <LeanCanvas />
        </Switch>
      </>
    );
  }
}

export default App;
