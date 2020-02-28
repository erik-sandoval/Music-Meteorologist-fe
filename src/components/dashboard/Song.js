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
    return seconds === 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  render() {
    console.log(this.props);
    const { song, playing, id, currentSong, tracks } = this.props;

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
              {playing && id === currentSong.id ? (
                <div className="pauseicon2" />
              ) : (
                <div
                  className="playicon2"
                  onClick={() => this.props.playSong(tracks, song.uri)}
                />
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
  tracksInfo: state.getTrackInfoReducer,
  currentSong: state.currentSongReducer.item,
  playing: state.currentSongReducer.playing
});

export default connect(mapStateToProps, { getTrackInfo })(Song);
