import React, { Component } from "react";
import { Route } from "react-router-dom";

import About from "./pages/about/about.component";
import Team from "./pages/team/team.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import Logout from "./pages/logout/logout.component";
import MusicPlayer from "./components/music-player/music.player.component";

import "./App.css";
import Landing from "./pages/landing/landing.component";
import { ProtectedRoute } from "./components/protected-route/protected-route.component";
import SliderContainer from "./components/slider-container/slider-container.component";

/* import LikedSongs from './components/LikedSongs'; */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/player" component={MusicPlayer} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/slider" component={SliderContainer} />
      </div>
    );
  }
}

export default App;
