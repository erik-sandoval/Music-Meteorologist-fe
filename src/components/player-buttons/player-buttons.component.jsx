import React from "react";
import { connect } from "react-redux";
import {
  saveLikedSong,
  removeTrack
} from "../../redux/Spotify/spotify.actions";

import { LikeDislikeContainer, PlayerButton } from "./player-buttons.styles";

import {
  onPlayClick,
  onNextClick,
  onPrevClick,
  toggleLikeButton
} from "../../utils/playerActions";

const PlayerButtons = props => {
  const { player, playing } = props;

  return (
    <LikeDislikeContainer>
      <div className="display-flex">
        <div style={{ display: "flex" }}>
          <PlayerButton id="prev" onClick={() => onPrevClick(player)}>
            <div className="previcon" style={{ maxHeight: 35 }} />
          </PlayerButton>

          <PlayerButton id="playpause" onClick={() => onPlayClick(props)}>
            {playing ? (
              <div className="pauseicon" style={{ maxHeight: 35 }} />
            ) : (
              <div className="playicon" style={{ maxHeight: 35 }} />
            )}
          </PlayerButton>

          <PlayerButton id="next" onClick={() => onNextClick(player)}>
            <div className="nexticon" style={{ maxHeight: 35 }} />
          </PlayerButton>
        </div>
        <PlayerButton
          id="heart"
          className="like-dislike like"
          onClick={() => toggleLikeButton(player, props)}
        >
          <div className="likeicon" id="like1" style={{ maxHeight: 70 }} />
        </PlayerButton>
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
