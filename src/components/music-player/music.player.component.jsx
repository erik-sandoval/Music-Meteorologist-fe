// import React, { useState, useEffect, useRef } from "react";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
// import axios from "axios";
import { setLocalTrackTime } from "../../redux/spotify/spotify.actions";
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

const MusicPlayer = props => {
  const { setLocalTrackTime, currentSong } = props;

  useInterval(
    () => {
      setLocalTrackTime();
    },
    currentSong.paused ? null : 1050
  );

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
                  <PlayerSeekBar></PlayerSeekBar>
                </div>
                <PlayerButtons />
              </Grid>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <AudioDetails />
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
};

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const mapStateToProps = state => ({
  currentSong: state.currentSong.currentSong
});

export default connect(mapStateToProps, { setLocalTrackTime })(MusicPlayer);
