import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import {
  getlikedSongs,
  getUsers,
  getSpotifyAccountDetails,
  persistUser,
  getSeveralTracks,
  createPlaylist,
  getCurrentUser,
  removeTrack
} from "../../redux/Spotify/spotify.actions";
import { postDSSong } from "../../redux/DS/ds.actions";
import Playlist from "../playlist/playlist.component";
import "../../App.css";

// Styling
import "../../App.css";

class PlayListContainer extends React.Component {
  state = {
    collapse: true,
    popout: false,
    playlistCreated: false,
    userDataFetching: false
  };

  openPlaylist() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  openAudioDetails() {
    this.setState({
      popout: !this.state.popout
    });
  }

  logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/logout");
  };

  render() {
    return (
      <div className="dashboard">
        <div id="mainBarLD1">
          <List>
            <div
              className="listTitles"
              style={{
                borderBottom: "1px solid #454B54",
                fontSize: 15,
                height: 20,
                color: "#454B54",
                fontWeight: "bold",
                display: "flex",
                width: "auto",
                marginLeft: "35px",
                marginRight: "35px",
                marginBottom: "2px"
              }}
            >
              <div
                className="moveTitle"
                style={{ marginLeft: 168, minWidth: 100 }}
              >
                Track / Artist{" "}
              </div>
              <div className="hideTitle" style={{ marginLeft: 100 }}>
                Album
              </div>
              <div className="hideTitle" style={{ marginLeft: 180 }}>
                Duration
              </div>
              <div className="hideTitle" style={{ marginLeft: 55 }}>
                Release Date
              </div>
            </div>
            <Paper
              className="scroll listItems"
              style={{
                width: "auto",
                minWidth: "850px",
                overflow: "auto",
                color: "white",
                marginLeft: "45px",
                overflowY: "scroll",
                height: "68vh",
                background: "transparent",
                boxShadow: "none",
                textAlign: "left"
              }}
            >
              <Playlist deviceId={this.props.deviceId} />
            </Paper>
          </List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spotifyUser: state.getUserReducer.spotifyUser,
  currentUser: state.getCurrentUserReducer.currentUser,
  fetchingSpotifyUser: state.getUserReducer.fetchingSpotifyUser,
  ds_songs: state.queueReducer.ds_songs,
  several_tracks: state.queueReducer.several_tracks,
  playlistId: state.createPlaylistReducer.playlistId,
  fetchingCreatePlaylist: state.createPlaylistReducer.fetchingPlaylist,
  status: state.removeTrackReducer.status
});

export default connect(mapStateToProps, {
  getlikedSongs,
  getUsers,
  getSpotifyAccountDetails,
  persistUser,
  postDSSong,
  getSeveralTracks,
  createPlaylist,
  getCurrentUser,
  removeTrack
})(PlayListContainer);
