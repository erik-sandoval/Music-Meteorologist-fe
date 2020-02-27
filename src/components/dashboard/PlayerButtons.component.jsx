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
        <button
          id="x"
          className="like-dislike dislike joyride-dislike-4"
          style={{ background: "none", border: "none", outline: "none" }}
          onClick={(props) => toggleDislikeButton(player, props)}
        >
          <a className="dislikeicon" style={{ maxHeight: 70 }} />
        </button>
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
            <a className="previcon" style={{ maxHeight: 35 }} />
          </button>

          <button
            id="playpause"
            style={{
              background: "none",
              border: "none",
              outline: "none"
            }}
            onClick={() => onPlayClick(player)}
          >
            {playing ? (
              <a className="pauseicon" style={{ maxHeight: 35 }} />
            ) : (
              <a className="playicon" style={{ maxHeight: 35 }} />
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
            <a className="nexticon" style={{ maxHeight: 35 }} />
          </button>
        </div>
        <button
          id="heart"
          className="like-dislike like"
          style={{ background: "none", border: "none", outline: "none" }}
          onClick={(props) => toggleLikeButton(player, props)}
        >
          <a className="likeicon" id="like1" style={{ maxHeight: 70 }} />
        </button>
      </div>
    </LikeDislikeContainer>
  );
};

const mapStateToProps = state => ({
  song: state.currentSongReducer.item
});

export default connect(mapStateToProps, { saveLikedSong, removeTrack })(
  PlayerButtons
);
