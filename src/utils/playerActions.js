import axios from "axios";
import { configure } from "@testing-library/react";

const spotifyApiUrl = "https://api.spotify.com/v1/me/player";

export const transferPlaybackHere = (accessToken, deviceId) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };

  axios.put(
    `${spotifyApiUrl}`,
    {
      device_ids: [deviceId]
    },
    config
  );
};

export const onPrevClick = () => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };

  axios
    .post(`${spotifyApiUrl}/previous`, {}, config)
    .then(res => {})
    .catch(err => {
      console.log(err);
    });
};

export const onPlayClick = playStatus => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };

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
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };

  axios
    .post(`${spotifyApiUrl}/next`, {}, config)
    .then(res => {})
    .catch(err => {
      console.log(err);
    });
};

export const saveLikedSong = (songId, liked) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };

  if (liked) {
    axios({
      method: "delete",
      url: `https://api.spotify.com/v1/me/tracks?ids=${songId}`,
      headers: { Authorization: "Bearer " + token }
    });
  } else {
    axios({
      method: "put",
      url: `https://api.spotify.com/v1/me/tracks?ids=${songId}`,
      headers: { Authorization: "Bearer " + token }
    });
  }
};

export const seekTrackTime = position_ms => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };

  position_ms = Math.floor(position_ms);

  axios
    .put(`${spotifyApiUrl}/seek?position_ms=${position_ms}`, {}, config)
    .then(res => {})
    .catch(err => {});
};
