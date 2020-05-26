import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";

import { LikeDislikeContainer, PlayerButton } from "./player-buttons.styles";

import {
  onPlayClick,
  onNextClick,
  onPrevClick,
  saveLikedSong
} from "../../utils/playerActions";
import { getLikedSongStatus } from "../../redux/spotify/spotify.actions";

const PlayerButtons = props => {
  const songPlaying = useSelector(state => state.currentSong.currentSong);

  const [liked, setLiked] = useState(false);
  const { getLikedSongStatus } = props;

  useEffect(() => {
    getLikedSongStatus(songPlaying.id).then(res => setLiked(res));
  }, [getLikedSongStatus, songPlaying]);

  return (
    <LikeDislikeContainer>
      <div className="display-flex">
        <div style={{ display: "flex" }}>
          <PlayerButton id="prev" onClick={() => onPrevClick()}>
            <div className="previcon" style={{ maxHeight: 35 }} />
          </PlayerButton>

          <PlayerButton
            id="playpause"
            onClick={() => onPlayClick(!songPlaying.paused)}
          >
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
          onClick={() => {
            saveLikedSong(songPlaying.id, liked);
            setLiked(!liked);
          }}
        >
          <div
            className={`likeicon ${liked ? "fullHeart" : ""}`}
            id="like1"
            style={{ maxHeight: 70 }}
          />
        </PlayerButton>
      </div>
    </LikeDislikeContainer>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { getLikedSongStatus })(PlayerButtons);
