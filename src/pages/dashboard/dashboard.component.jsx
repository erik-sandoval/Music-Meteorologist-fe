import React from "react";
import { connect } from "react-redux";

import LoadingPage from "../loading/loading.component";
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
import MusicPlayer from "../../components/music-player/music.player.component";

// Styling
import "../../App.css";

class Dashboard extends React.Component {
  state = {
    collapse: false,
    popout: false,
    playlistCreated: false,
    userDataFetching: false
  };

  componentDidMount() {
    this.props.getSpotifyAccountDetails();

    this.dsDelivery();

    if (this.props.spotifyUser.length > 0) {
      this.props.persistUser(this.props.spotifyUser);
    }
    this.props.getlikedSongs();
  }

  componentDidUpdate(prevProps) {
    if (this.state.userDataFetching === false && this.props.spotifyUser.id) {
      this.props.getCurrentUser(this.props.spotifyUser.id);
      this.setState({
        userDataFetching: true
      });
    }
    setTimeout(() => {
      if (
        !this.state.playlistCreated &&
        /* this.props.spotifyUser.id && */
        !this.props.fetchingCreatePlaylist &&
        // this.props.playlistId === null &&
        !this.props.currentUser.spotify_playlist_id
      ) {
        this.props.createPlaylist(this.props.spotifyUser.id);
      }
    }, 4000);

    if (this.props.playlistId && !this.state.playlistCreated) {
      this.props.persistUser(this.props.spotifyUser, this.props.playlistId);
      this.setState({
        playlistCreated: true
      });
      setTimeout(() => {
        this.props.getCurrentUser(this.props.spotifyUser.id);
      }, 5000);
    }

    if (this.props.savingLike) {
      this.props.getlikedSongs();
    }
    if (
      this.props.isFetchingSuccessful === true &&
      this.props.ds_songs !== prevProps.ds_songs
    ) {
      this.props.addToPlaylist(
        {
          uris: this.createSpotifyUriArray(this.props.ds_songs.songs)
        },
        this.props.currentUser.spotify_playlist_id
      );
    }
  }

  getDataScienceSongArray = () => {
    this.props.dsSongs.length > 0 &&
      this.props.getSeveralTracks(this.concatenateSongIds(this.props.dsSongs));
  };

  concatenateSongIds(array) {
    return array.map(song => song.values).join(",");
  }

  dsDelivery() {
    const token = { token: localStorage.getItem("token") };
    this.props.postDSSong(token);
  }

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
    localStorage.removeItem("ds_songs");
    this.props.history.push("/logout");
  };

  render() {
    return (
      <div className="dashboard">
        {this.props.fetchingDsSongs ? (
          <div>
            <MusicPlayer spotifyId={this.props.spotifyUser} />
          </div>
        ) : (
          <LoadingPage />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spotifyUser: state.getUserReducer.spotifyUser,
  currentUser: state.getCurrentUserReducer.currentUser,
  fetchingSpotifyUser: state.getUserReducer.fetchingSpotifyUser,
  fetchingDsSongs: state.queueReducer.isFetchingSuccessful,
  dsSongs: state.queueReducer.ds_songs.songs,
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
})(Dashboard);
