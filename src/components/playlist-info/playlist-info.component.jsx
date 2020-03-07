import React from "react";

import { connect } from "react-redux";
import {
  createPlaylist,
  getSeveralTracks,
  addToPlaylist
} from "../../redux/Spotify/spotify.actions";
import axios from "axios";

import {
  Container,
  DivLeft,
  DivRight,
  PlayLogo,
  PlayInfo,
  PlayH1,
  PlayH2,
  MakePlaylist
} from "./playlist-info.styles";

class PlaylistInfo extends React.Component {
  msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;
    if (secs === 0) {
      return mins + ":" + "00";
    } else if (secs < 10) {
      return mins + ":" + "0" + secs;
    } else {
      return mins + ":" + secs;
    }
  }
  songTime = () => {
    let trackslist = this.props.several_tracks.tracks.map(
      track => track.duration_ms
    );
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let songTime = trackslist.reduce(reducer);
    let total = this.msToTime(songTime);
  };

  addPlaylist = () => {
    let trackUris = this.props.several_tracks.tracks
      ? this.props.several_tracks.tracks.map(track => track.uri)
      : 0;
    if (trackUris === 0) {
      window.alert("Playlist hasn't populated yet.");
    }
    var config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    };
    var playlistName = {
      name: "Sound Drip Playlist",
      description: "A playlist of songs curated by Sound Drip"
    };
    if (this.props.several_tracks.tracks) {
      axios
        .post(
          `https://api.spotify.com/v1/users/${this.props.spotifyId}/playlists`,
          playlistName,
          config
        )
        .then(res => {
          axios.post(
            `https://api.spotify.com/v1/playlists/${res.data.id}/tracks`,
            { uris: trackUris },
            config
          );
        });
    }
  };

  render() {
    return (
      <Container id="playInfoLD">
        <DivLeft>
          <PlayLogo className="playLogo" />
          <PlayInfo>
            <PlayH1
              className="playH1"
              style={{
                fontSize: 24,
                paddingTop: 30,
                paddingBottom: 0,
                marginLeft: 15
              }}
            >
              {this.props.spotifyName + "'s Sound Drip Playlist"}
            </PlayH1>
            <div className="playH2" style={{ display: "flex" }}>
              <div className="playlisticon" />
              <PlayH2>20 Songs</PlayH2>
              <PlayH2 onClick={this.songTime}>{this.songTime}</PlayH2>
            </div>
          </PlayInfo>
        </DivLeft>
        <DivRight>
          <MakePlaylist onClick={this.addPlaylist}>
            Add This Playlist!
          </MakePlaylist>
        </DivRight>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  several_tracks: state.queueReducer.several_tracks,
  playlistId: state.createPlaylistReducer.playlistId
});

export default connect(mapStateToProps, {
  getSeveralTracks,
  createPlaylist,
  addToPlaylist
})(PlaylistInfo);
