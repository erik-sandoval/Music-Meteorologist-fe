import React from "react";
import { connect } from "react-redux";

import PlaylistSong from "../playlist-song/playlist-song.component";

import axios from "axios";

class Playlist extends React.Component {
  state = {
    getList: false
  };
  componentDidMount() {}

  playSong = (trackUris, songUri) => {
    let songIndex = null;
    for (let i = 0; i < trackUris.length; i++) {
      if (trackUris[i] === songUri) {
        songIndex = i;
        break;
      }
    }

    const newPlaylist = trackUris
      .slice(songIndex)
      .concat(trackUris.slice(0, songIndex));

    axios.put(
      `https://api.spotify.com/v1/me/player/play?device_id=${this.props.deviceId}`,
      {
        uris: newPlaylist
      },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }
    );
  };

  render() {
    const { several_tracks, deviceId, fetchingLikedSongs } = this.props;

    if (fetchingLikedSongs) {
      return <h1>Loading...</h1>;
    }
    return (
      <div container>
        <div id="songLD" item>
          {several_tracks.tracks ? (
            several_tracks.tracks.map(song => (
              <PlaylistSong
                song={song}
                id={song.id}
                key={song.id}
                deviceId={deviceId}
                tracks={several_tracks.tracks.map(track => track.uri)}
                playSong={this.playSong}
              />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Playlist);
