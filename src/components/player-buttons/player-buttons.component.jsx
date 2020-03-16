import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { ReactComponent as ShuffleIcon } from "../../assets/shuffle.svg";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg";

import { PlayerButtonsController, PlayerButton } from "./player-buttons.styles";

import {
  onPlayClick,
  onNextClick,
  onPrevClick,
  saveLikedSong
} from "../../utils/playerActions";
import {
  getLikedSongStatus,
  toggleShuffle
} from "../../redux/spotify/spotify.actions";

const PlayerButtons = props => {
  const songPlaying = useSelector(state => state.currentSong.currentSong);

  const [liked, setLiked] = useState(false);
  const { getLikedSongStatus, toggleShuffle, shuffled } = props;

  const toggleFunction = () => {
    toggleShuffle(shuffled);
  };

  useEffect(() => {
    getLikedSongStatus(songPlaying.id).then(res => setLiked(res));
  }, [getLikedSongStatus, songPlaying]);

  return (
    <PlayerButtonsController>
      <PlayerButton shuffled={shuffled} onClick={toggleFunction}>
        <ShuffleIcon className="shuffle-icon"></ShuffleIcon>
      </PlayerButton>

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
      <PlayerButton
        onClick={() => {
          saveLikedSong(songPlaying.id, liked);
          setLiked(!liked);
        }}
        liked={liked}
      >
        <HeartIcon className="heart-icon"></HeartIcon>
      </PlayerButton>
    </PlayerButtonsController>
  );
};

const mapStateToProps = state => ({
  shuffled: state.currentSong.shuffledStatus
});

export default connect(mapStateToProps, { getLikedSongStatus, toggleShuffle })(
  PlayerButtons
);
