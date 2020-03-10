import axios from "axios";

const spotifyApiUrl = "https://api.spotify.com/v1/me/player";

const token = localStorage.getItem("token");

const config = {
  headers: {
    Authorization: "Bearer " + token
  }
};

export const transferPlaybackHere = (accessToken, deviceId) => {
  axios.put(
    `${spotifyApiUrl}`,
    {
      device_ids: [deviceId]
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  );
};

export const onPrevClick = () => {
  axios
    .post(`${spotifyApiUrl}/previous`, {}, config)
    .then(res => {})
    .catch(err => {
      console.log(err);
    });
};

export const onPlayClick = playStatus => {
  if (playStatus) {
    axios
      .put(`${spotifyApiUrl}/pause`, {}, config)
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  } else {
    axios
      .put(`${spotifyApiUrl}/play`, {}, config)
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
  }
};

export const onNextClick = () => {
  axios
    .post(`${spotifyApiUrl}/next`, {}, config)
    .then(res => {})
    .catch(err => {
      console.log(err);
    });

  var element = document.getElementById("like1");
  element.classList.remove("fullHeart");
};

export const toggleLikeButton = props => {
  props.saveLikedSong(props.song.id);

  var element = document.getElementById("like1");
  element.classList.add("fullHeart");
};

export const toggleDislikeButton = () => {};

export const seekTrackTime = position_ms => {
  position_ms = Math.floor(position_ms);

  axios
    .put(`${spotifyApiUrl}/seek?position_ms=${position_ms}`, {}, config)
    .then(res => {})
    .catch(err => {
      console.log(err);
    });
};
