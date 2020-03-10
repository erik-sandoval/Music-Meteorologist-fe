import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
// import axios from "axios";
import {} from "../../redux/spotify/spotify.actions";
import PlayListContainer from "../playlist-container/playlist-container.component";

// Features
import AlbumInfo from "../album-info/album-info.component";
import PlayerButtons from "../player-buttons/player-buttons.component";
import AudioDetails from "../audio-details/audio-details.component";

// Styles

import PlaylistInfo from "../../components/playlist-info/playlist-info.component";

import PlayerSeekBar from "../player-seek-bar/player-seek-bar.component";

import NavBar from "../navigation-bar/dashboard-nav/dashboard-nav.component";

import {
  ElementContainer,
  SideBarContainer,
  MainBarContainer,
  PlaylistSongsContainer
} from "./music-player.styles";

class MusicPlayer extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ElementContainer>
          <SideBarContainer id="sideBarLD">
            <div id="sideBarLD1" className="music-player joyride-player-2">
              <AlbumInfo />
              <div>
                <Grid
                  container
                  direction="column"
                  justify="space-around"
                  alignItems="center"
                  style={{ width: 377, height: "60px", marginBottom: "10px" }}
                >
                  <div>
                    {/* currently causing memory leak */}
                    {/* <PlayerSeekBar></PlayerSeekBar> */}
                  </div>
                  <PlayerButtons />
                </Grid>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  {/* currently causing memory leak */}
                  {/* <AudioDetails /> */}
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ width: 300, marginBottom: "5%" }}
                  ></Grid>
                </Grid>
              </div>
            </div>
          </SideBarContainer>
          <MainBarContainer id="mainBarLD" className="mainBar">
            <PlaylistInfo></PlaylistInfo>
            <PlaylistSongsContainer>
              <PlayListContainer></PlayListContainer>
            </PlaylistSongsContainer>
          </MainBarContainer>
        </ElementContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(MusicPlayer);
