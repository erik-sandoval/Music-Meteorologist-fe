import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import { setLocalTrackTime } from "../../redux/spotify/spotify.actions";

// Features

import NavBar from "../navigation-bar/dashboard-nav/dashboard-nav.component";
import SliderContainer from "../../components/slider-container/slider-container.component";
import AlbumInfo from "../album-info/album-info.component";
import AudioDetails from "../audio-details/audio-details.component";
import PlayerSeekBar from "../player-seek-bar/player-seek-bar.component";
import PlayerButtons from "../player-buttons/player-buttons.component";
import PlayListContainer from "../playlist-container/playlist-container.component";
import PlaylistInfo from "../../components/playlist-info/playlist-info.component";

// Styles
import {
  ElementContainer,
  SideBarContainer,
  MainBarContainer,
  PlaylistSongsContainer,
  PlayerBarAndControlsContainer
} from "./music-player.styles";

const MusicPlayer = props => {
  const { setLocalTrackTime, currentSong } = props;
  const [collapsed, setCollapsed] = useState(true);

  const toggleSlider = e => {
    e.persist();

    if (e.target.innerText === "Preferences") {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  useInterval(
    () => {
      setLocalTrackTime();
    },
    currentSong.paused ? null : 1050
  );

  return (
    <div>
      <NavBar toggleSlider={toggleSlider} />
      <ElementContainer>
        <SideBarContainer id="sideBarLD">
          <div id="sideBarLD1" className="music-player joyride-player-2">
            <AlbumInfo />
            <div>
              <PlayerBarAndControlsContainer>
                <PlayerSeekBar></PlayerSeekBar>
                <PlayerButtons />
              </PlayerBarAndControlsContainer>
              <AudioDetails />
            </div>
          </div>
        </SideBarContainer>
        <MainBarContainer id="mainBarLD" className="mainBar">
          {collapsed ? (
            <>
              <PlaylistInfo></PlaylistInfo>
              <PlaylistSongsContainer>
                <PlayListContainer></PlayListContainer>
              </PlaylistSongsContainer>
            </>
          ) : (
            <SliderContainer toggleSlider={toggleSlider}></SliderContainer>
          )}
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
  currentSong: state.currentSong.currentSong,
  dsSongsFetching: state.dsSongs.dsSongsFetching
});

export default connect(mapStateToProps, { setLocalTrackTime })(MusicPlayer);
