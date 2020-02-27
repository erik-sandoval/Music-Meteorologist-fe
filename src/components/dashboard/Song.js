import React from "react";
import { connect } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { getTrackInfo } from "../../Redux/Spotify/spotify.actions";
import "../../App.css";
import axios from "axios";

class Song extends React.Component {
  msToTime(s) {
    var minutes = Math.floor(s / 60000);
    var seconds = ((s % 60000) / 1000).toFixed(0);
    return seconds == 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  changeSong = trackUris => {
    axios.put(
      `https://api.spotify.com/v1/me/player/play?device_id=${this.props.deviceId}`,
      {
        uris: trackUris
      },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }
    );
  };

  render() {
    const { song } = this.props;

    const trackUris = this.props.tracks.map(track => track.uri);
    trackUris.unshift(song.uri);

    console.log("Song Component props", this.props);

    return (
      <div>
        <Grid
          style={{ borderRadius: "5px" }}
          container
          direction="row"
          alignItems="center"
          wrap="wrap"
          className="song"
        >
          <Grid item>
            <button
              className="playflex"
              style={{
                background: "none",
                border: "none",
                outline: "none"
              }}
            >
              {"playing" ? (
                <a
                  onClick={() => this.changeSong(trackUris)}
                  className="playicon2"
                />
              ) : (
                <a className="playicon" style={{ maxHeight: 35 }} />
              )}
            </button>
          </Grid>
          <Grid item style={{ padding: 5 }}>
            <img
              style={{ borderRadius: "5px", marginRight: "20px" }}
              src={song.album.images[2].url}
              alt="album art"
              width="64px"
            />
          </Grid>
          <Grid item style={{ padding: 5, width: "200px" }}>
            <Typography
              className="songName"
              style={{ fontSize: 13, fontWeight: "bold", marginBottom: "3px" }}
              direction="row"
            >
              {song.name}
            </Typography>
            <Typography className="songArtistName" style={{ fontSize: 13 }}>
              {song.artists[0].name}
            </Typography>
            <Typography style={{ fontSize: 13 }}></Typography>
            {/* <p>Audio Features: {loadingTf ? 'loading....' : tf.data.tempo}</p> */}
          </Grid>
          <Grid
            className="songAlbumName"
            item
            style={{
              padding: 5,
              fontSize: 13,
              width: "200px",
              marginRight: "10px"
            }}
          >
            {song.album.name}
          </Grid>
          <Grid
            className="songDuration"
            item
            style={{ padding: 5, fontSize: 13, width: "50px", marginLeft: 25 }}
          >
            {this.msToTime(song.duration_ms)}
          </Grid>
          <Grid
            className="songReleaseDate"
            item
            style={{ padding: 5, fontSize: 13, width: "100px", marginLeft: 65 }}
          >
            {song.album.release_date}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tracksInfo: state.getTrackInfoReducer
});

export default connect(mapStateToProps, { getTrackInfo })(Song);
