import React, { Component } from "react";
import { Route } from "react-router-dom";

import About from "./pages/about/about.component";
import Team from "./pages/team/team.component";

import "./App.css";
import Landing from "./pages/landing/landing.component";

/* import LikedSongs from './components/LikedSongs'; */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <Landing {...props} />} />
        {/* <Route exact path='/logout' component={Logout} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />
        {/* <ProtectedRoute exact path='/dashboard' component={Dashboard} /> */}
      </div>
    );
  }
}

export default App;
