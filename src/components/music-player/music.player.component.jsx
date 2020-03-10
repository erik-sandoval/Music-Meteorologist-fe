import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
// import axios from "axios";
import {

} from "../../redux/spotify/spotify.actions";
import { postDSSong } from "../../redux/ds/ds.actions";
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
    const {
      trackName,
      artistName,
      albumName,
      error,
      imageSpotify
    } = this.state;

    return (
      <div>
        <NavBar
          musicPlayerProps={this.props}
          userName={this.props.spotifyId.display_name}
          deviceId={this.state.deviceId}
        />
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
                    {/* <LinearDeterminate player={this.player} /> */}
                    <PlayerSeekBar player={this.player}></PlayerSeekBar>
                  </div>
                  <PlayerButtons
                    player={this.player}
                    playing={this.props.playing}
                    trueSimilarity={this.state.trueSimilarity}
                  />
                </Grid>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <AudioDetails />
                  <Grid item>
                    {window.Spotify !== undefined &&
                      this.state.imageUrl !== "" && (
                        <div className="album-art">
                          <h4 style={{ textAlign: "center" }}>Now Playing</h4>
                          <img
                            className="album-artwork"
                            src={this.state.imageUrl}
                            alt="album-art"
                          />
                        </div>
                      )}
                  </Grid>
                  {error && <p>Error: {error}</p>}
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
            <PlaylistInfo
              spotifyId={this.props.spotifyId.id}
              spotifyName={this.props.spotifyId.display_name}
            ></PlaylistInfo>
            <PlaylistSongsContainer>
              <PlayListContainer
                player={this.player}
                deviceId={this.state.deviceId}
              ></PlayListContainer>
            </PlaylistSongsContainer>
          </MainBarContainer>
        </ElementContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {
})(MusicPlayer);
