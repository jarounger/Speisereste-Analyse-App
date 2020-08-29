import React, { Component } from "react";
import Speisereste from "./Components/Speisereste";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Table from "./Components/Table";
import Help from "./Components/Help";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Speisereste} />
        <Route exact path="/view" component={Table} />
        <Route exact path="/help" component={Help} />
      </Router>
    );
  }
}

export default App;
