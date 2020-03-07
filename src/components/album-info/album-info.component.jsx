import React from "react";
import { Grid } from "@material-ui/core";

import "../../App.css";
import { AlbumImg } from "./album-info.styles";

const AlbumInfo = props => {
  const { imageSpotify, trackName, artistName, albumName } = props;

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

export default AlbumInfo;
