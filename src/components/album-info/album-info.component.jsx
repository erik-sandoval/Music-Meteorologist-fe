import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import "../../App.css";
import { AlbumImg } from "./album-info.styles";

const AlbumInfo = props => {
  const { currentSong } = props;

  const trackName = currentSong.name;
  const artistName = currentSong.artists[0].name;
  const albumName = currentSong.album.name;
  const imageSpotify = currentSong.album.images[0].url;

  return (
    <div className="music-component">
      <Grid
        item
        className="music-component-album-info"
        style={{ maxWidth: "300px" }}
      >
        <AlbumImg src={imageSpotify} alt="Album artwork cover." />
        <p className="p" style={{ fontWeight: "bold" }}>
          {trackName}
        </p>
        <p>{artistName}</p>
        <p>{albumName}</p>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  currentSong: state.currentSong.currentSong
});

export default connect(mapStateToProps)(AlbumInfo);
