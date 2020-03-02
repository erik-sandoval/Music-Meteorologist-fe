import React, { Component } from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "./components/protected.route";

import Auth from "./components/Auth";
import MusicPlayer from "./components/dashboard/MusicPlayer";

import Logout from "./views/Logout";
import Dashboard from "./views/Dashboard.js";
import "./App.css";
import About from "./components/About";
import Team from "./components/Team";

/* import LikedSongs from './components/LikedSongs'; */

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' render={props => <Auth {...props} />} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path='/about' component={About} />
        <Route exact path='/team' component={Team} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        {/* <FooterContainer /> */}
      </div>
    );
  }
}

export default App;
