import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { ReactComponent as ShuffleIcon } from "../../assets/shuffle.svg";
import { ReactComponent as HeartIcon } from "../../assets/heart.svg";

import { PlayerButtonsController, PlayerButton } from "./player-buttons.styles";

import { saveLikedSong } from "../../utils/playerActions";
import {
  getLikedSongStatus,
  toggleShuffle
} from "../../redux/spotify/spotify.actions";

const PlayerButtons = props => {
  const songPlaying = useSelector(state => state.currentSong.currentSong);
  const { getLikedSongStatus, toggleShuffle, shuffled } = props;

  const [liked, setLiked] = useState(false);
  const [isShuffled, setShuffled] = useState(null);

  const toggleFunction = () => {
    toggleShuffle(isShuffled);
    setShuffled(!isShuffled);
  };

  useEffect(() => {
    console.log("rendering again");
    setShuffled(shuffled);
    getLikedSongStatus(songPlaying.id).then(res => setLiked(res));
  }, [getLikedSongStatus, shuffled, songPlaying]);

  console.log({ playerbuttonprops: props, isShuffled, shuffled });
  return (
    <PlayerButtonsController>
      <PlayerButton shuffled={isShuffled} onClick={toggleFunction}>
        <ShuffleIcon className="shuffle-icon"></ShuffleIcon>
      </PlayerButton>

      <PlayerButton id="prev" onClick={() => props.player.previousTrack()}>
        <div className="previcon" style={{ maxHeight: 35 }} />
      </PlayerButton>

      <PlayerButton id="playpause" onClick={() => props.player.togglePlay()}>
        {!songPlaying.paused ? (
          <div className="pauseicon" style={{ maxHeight: 35 }} />
        ) : (
          <div className="playicon" style={{ maxHeight: 35 }} />
        )}
      </PlayerButton>

      <PlayerButton id="next" onClick={() => props.player.nextTrack()}>
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
