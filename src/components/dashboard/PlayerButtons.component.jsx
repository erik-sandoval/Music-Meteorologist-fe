import React from "react";
import { connect } from "react-redux";
import {
  saveLikedSong,
  removeTrack
} from "../../Redux/Spotify/spotify.actions";
import LikeDislikeContainer from "../dashboard/element-styles/LikeDislikeContainer";

import {
  toggleDislikeButton,
  onPlayClick,
  onNextClick,
  onPrevClick,
  toggleLikeButton
} from "../../playerActions/playerActions";

const PlayerButtons = props => {
  const { player, playing } = props;

  return (
    <LikeDislikeContainer>
      <div className="display-flex">
        <div style={{ display: "flex" }}>
          <button
            id="prev"
            style={{
              background: "none",
              border: "none",
              outline: "none"
            }}
            onClick={() => onPrevClick(player)}
          >
            <div className="previcon" style={{ maxHeight: 35 }} />
          </button>

          <button
            id="playpause"
            style={{
              background: "none",
              border: "none",
              outline: "none"
            }}
            onClick={() => onPlayClick(props)}
          >
            {playing ? (
              <div className="pauseicon" style={{ maxHeight: 35 }} />
            ) : (
              <div className="playicon" style={{ maxHeight: 35 }} />
            )}
          </button>

          <button
            id="next"
            style={{
              background: "none",
              border: "none",
              outline: "none"
            }}
            onClick={() => onNextClick(player)}
          >
            <div className="nexticon" style={{ maxHeight: 35 }} />
          </button>
        </div>
        <button
          id="heart"
          className="like-dislike like"
          style={{ background: "none", border: "none", outline: "none" }}
          onClick={() => toggleLikeButton(player, props)}
        >
          <div className="likeicon" id="like1" style={{ maxHeight: 70 }} />
        </button>
      </div>
    </LikeDislikeContainer>
  );
};

const mapStateToProps = state => ({
  song: state.currentSongReducer.item,
  playing: state.currentSongReducer.playing
});

export default connect(mapStateToProps, { saveLikedSong, removeTrack })(
  PlayerButtons
);
