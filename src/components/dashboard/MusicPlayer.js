import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
// import axios from "axios";
import {
  getCurrentSong,
  getTrackInfo,
  getSeveralTracks,
  createPlaylist,
  addToPlaylist,
  removeTrack,
  getlikedSongs,
  saveLikedSong,
} from "../../Redux/Spotify/spotify.actions";
import { postDSSong } from "../../Redux/DS/ds.actions";
import PlaylistItems from "./PlaylistItems";

// Features
import LinearDeterminate from "../LinearDeterminate";
import AlbumInfo from "./AlbumInfo.component";
import PlayerButtons from "./PlayerButtons.component";
import AudioDetailsContainer from "./AudioDetailsContainer";

// Styles
import "../../App.css";
import ElementContainer from "./element-styles/ElementContainer";
import SideBar from "./element-styles/SideBar";
import MainBar from "./element-styles/MainBarContainer";
import PlaylistInfoContainer from "./element-styles/PlaylistInfo";
import PlaylistSongsContainer from "./element-styles/PlaylistSongs";
import NavBar from "./element-styles/NavBarMusicPlayer";

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      deviceId: "",
      loggedIn: false,
      error: "",
      trackName: "Track Name",
      artistName: "Artist Name",
      albumName: "Album Name",
      imageSpotify: "",
      imageUrl: "",
      playing: false,
      position: 0,
      duration: 1,
      id: "",
      songFeatures: [],
      currentTrack: "",
      trueSimilarity: { similarity: 0.00001, values: "mock" }
    };
    this.playerCheckInterval = null;
  }

  componentDidMount() {
    this.handleLogin();
  }

  dsDelivery() {
    const token = { token: localStorage.getItem("token") };
    this.props.postDSSong(token);
  }

  handleLogin() {
    if (this.state.token !== "") {
      this.setState({ loggedIn: true })
      this.playerCheckInterval = this.checkForPlayer()
    }
  }

  onStateChanged(spotifyState) {
    if (spotifyState !== null) {
      const {
        current_track: currentTrack,
        position,
        duration
      } = spotifyState.track_window;
      const trackName = currentTrack.name;
      const albumName = currentTrack.album.name;
      const artistName = currentTrack.artists
        .map(artist => artist.name)
        .join(", ");
      const imageSpotify = currentTrack.album.images[2].url;
      let playing = !spotifyState.paused;
      this.setState({
        position,
        duration,
        trackName,
        albumName,
        artistName,
        playing,
        imageSpotify
      });
    } else {
      this.setState({
        error: "Looks like you might have swapped to another device?"
      });
    }
  }

  createEventHandlers() {
    this.player.on("initialization_error", e => {});
    this.player.on("authentication_error", e => {
      this.setState({ loggedIn: false });
    });
    this.player.on("account_error", e => {});
    this.player.on("playback_error", e => {});

    // ONLY WHEN PLAYER STATE CHANGED
    this.player.on("player_state_changed", spotifyState => {
      this.onStateChanged(spotifyState);

      if (this.props.ds_songs && this.props.isFetchingSuccessful === true) {
        this.props.song && this.getCurrentSongFeatures(this.props.song.id);
      }
      // ONLY WHEN NEW SONG
      if (
        spotifyState.track_window.current_track.id !== this.state.currentTrack
      ) {
        this.currentSong();
        this.setState({
          currentTrack: spotifyState.track_window.current_track.id
        });
        this.player.setVolume(0);
        this.player.seek(1);
        this.player.setVolume(0.5);
        if (true) {
          this.getDataScienceSongArray();
        }
      }
    });

    this.player.on("ready", async data => {
      let { device_id } = data;

      await this.setState({
        deviceId: device_id,
        loggedIn: true
      });
      this.transferPlaybackHere();
      this.props.ds_songs && this.currentSong();
    });
  }

  getDataScienceSongArray = () => {
    this.props.ds_songs.songs.length > 0 &&
      this.props.getSeveralTracks(
        this.concatenateSongIds(this.props.ds_songs.songs)
      );
  };

  concatenateSongIds(array) {
    const concatString = array.map(song => song.values).join(",");
    console.log("testing concat string", concatString);
    return concatString;
  }
  getCurrentSongFeatures = id => this.props.getTrackInfo(id);

  createSpotifyUriArray(array) {
    return array.map(song => "spotify:track:" + song.values);
  }

  checkForPlayer() {
    const { token } = this.state;

    if (window.Spotify !== undefined) {
      clearInterval(this.playerCheckInterval);

      this.player = new window.Spotify.Player({
        name: "Sound Drip Spotify Player",
        getOAuthToken: cb => {
          cb(token);
        }
      });

      this.createEventHandlers();

      this.player.connect();
    }
  }

  currentSong() {
    this.props.getCurrentSong();
    if (this.props.song === undefined) {
      this.props.getCurrentSong();
    }
  }

  transferPlaybackHere() {
    const { token } = this.state;
    fetch(`https://api.spotify.com/v1/me/player`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        device_ids: [this.state.deviceId]
      })
    });
    this.player.setVolume(0);
    this.player.setVolume(0.5);
  }

  render() {
    const {
      trackName,
      artistName,
      albumName,
      error,
      playing,
      imageSpotify
    } = this.state;

    console.log("playing state from Music Player", playing);

    return (
      <div>
        <NavBar
          musicPlayerProps={this.props}
          userName={this.props.spotifyId.display_name}
          deviceId={this.state.deviceId}
        />
        <ElementContainer>
          <SideBar id="sideBarLD">
            <div id="sideBarLD1" className="music-player joyride-player-2">
              <AlbumInfo
                imageSpotify={imageSpotify}
                trackName={trackName}
                artistName={artistName}
                albumName={albumName}
              />
              <div>
                <Grid
                  container
                  direction="column"
                  justify="space-around"
                  alignItems="center"
                  style={{ width: 377, height: "60px", marginBottom: "10px" }}
                >
                  <div>
                    <LinearDeterminate player={this.player} />
                  </div>
                  <PlayerButtons
                    player={this.player}
                    playing={playing}
                    trueSimilarity={this.state.trueSimilarity}
                  />
                </Grid>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <AudioDetailsContainer traits={this.props.traits} />
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
          </SideBar>
          <MainBar id="mainBarLD" className="mainBar">
            <PlaylistInfoContainer
              spotifyId={this.props.spotifyId.id}
              spotifyName={this.props.spotifyId.display_name}
            ></PlaylistInfoContainer>
            <PlaylistSongsContainer>
              <PlaylistItems
                player={this.player}
                deviceId={this.state.deviceId}
              ></PlaylistItems>
            </PlaylistSongsContainer>
          </MainBar>
        </ElementContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  song: state.currentSongReducer.item,
  imageUrl: state.currentSongReducer.imageUrl,
  traits: state.getTrackInfoReducer,
  ds_songs: state.queueReducer.ds_songs,
  several_tracks: state.queueReducer.several_tracks,
  playlistId: state.createPlaylistReducer.playlistId,
  song_id: state.likedSongsReducer.song_id,
  savingLike: state.likedSongsReducer.savingLike,
  isFetchingSuccessful: state.queueReducer.isFetchingSuccessful,
  isFetchingDSSongs: state.queueReducer.isFetchingDSSongs
});

export default connect(mapStateToProps, {
  getTrackInfo,
  getCurrentSong,
  postDSSong,
  getSeveralTracks,
  createPlaylist,
  addToPlaylist,
  removeTrack,
  getlikedSongs,
  saveLikedSong,

})(MusicPlayer);
