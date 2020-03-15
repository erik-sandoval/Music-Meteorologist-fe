import React from "react";
import { connect } from "react-redux";

import PlaylistSong from "../playlist-song/playlist-song.component";
import Loader from "../../pages/loading/loading.component";

import axios from "axios";

class Playlist extends React.Component {
  state = {
    getList: false
  };
  componentDidMount() {}

  playSong = (songs, songUri) => {
    let songIndex = null;

    const trackUris = songs.map(track => track.uri);

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
      `https://api.spotify.com/v1/me/player/play`,
      {
        uris: newPlaylist
      },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }
    );
  };

  render() {
    const {
      spotifySongs: { spotifySongsFetching, spotifySongUris, dsSongsFetching }
    } = this.props;

    if (spotifySongsFetching || dsSongsFetching) {
      return <Loader></Loader>;
    }
    return (
      <div container>
        <div id="songLD" item>
          {spotifySongUris ? (
            spotifySongUris.map(song => (
              <PlaylistSong
                song={song}
                id={song.id}
                key={song.id}
                playSong={this.playSong}
              />
            ))
          ) : (
            <Loader></Loader>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  spotifySongs: state.spotifyUris,
  dsSongsFetching: state.dsSongs.dsSongsFetching
});

export default connect(mapStateToProps, {})(Playlist);
