import React from "react";
import { connect } from "react-redux";

import { LikeDislikeContainer, PlayerButton } from "./player-buttons.styles";

import {
  onPlayClick,
  onNextClick,
  onPrevClick,
  saveLikedSong
} from "../../utils/playerActions";

const PlayerButtons = props => {
  const { songPlaying } = props;
  const { currentSong } = props.songPlaying;
  return (
    <LikeDislikeContainer>
      <div className="display-flex">
        <div style={{ display: "flex" }}>
          <PlayerButton id="prev" onClick={() => onPrevClick()}>
            <div className="previcon" style={{ maxHeight: 35 }} />
          </PlayerButton>

          <PlayerButton id="playpause" onClick={() => onPlayClick(!songPlaying.paused)}>
            {!songPlaying.paused ? (
              <div className="pauseicon" style={{ maxHeight: 35 }} />
            ) : (
              <div className="playicon" style={{ maxHeight: 35 }} />
            )}
          </PlayerButton>

          <PlayerButton id="next" onClick={() => onNextClick()}>
            <div className="nexticon" style={{ maxHeight: 35 }} />
          </PlayerButton>
        </div>
        <PlayerButton
          id="heart"
          className="like-dislike like"
          onClick={() => saveLikedSong(currentSong.id)}
        >
          <div className="likeicon" id="like1" style={{ maxHeight: 70 }} />
        </PlayerButton>
      </div>
    </LikeDislikeContainer>
  );
};

const mapStateToProps = state => ({
  songPlaying: state.currentSong
});

export default connect(mapStateToProps, {})(PlayerButtons);
