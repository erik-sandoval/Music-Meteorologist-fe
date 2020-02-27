export const onPrevClick = player => {
  player.previousTrack();
  player.setVolume(0);
  player.setVolume(0.5);
};

export const onPlayClick = player => {
  player.togglePlay();
};

export const onNextClick = player => {
  player.nextTrack();
  player.setVolume(0);
  player.playing && player.pause();

  player.setVolume(0.5);
};

export const toggleLikeButton = (player, props) => {
  props.saveLikedSong(props.song.id);

  player.setVolume(0.5);

  props.removeTrack(props.currentUser.spotify_playlist_id, props.song.id);
  var element = document.getElementById("like1");
  element.classList.add("fullHeart");
};

export const toggleDislikeButton = (player, props) => {
  player.nextTrack();
  player.setVolume(0);
  setTimeout(() => {
    player.pause();
    player.setVolume(0.5);
  }, 2000);
  props.removeTrack(props.currentUser.spotify_playlist_id, props.song.id);
  var element = document.getElementById("like1");
  element.classList.remove("fullHeart");
};
