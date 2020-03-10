import SpotifyActionTypes from "./spotify.types.js";
import axios from "axios";

const spotifyBaseUrl = "https://api.spotify.com/v1";

const spotifyToken = localStorage.getItem("token");

const config = {
  headers: { Authorization: "Bearer " + spotifyToken }
};

export const getSeveralTracks = ids => dispatch => {
  const idString = ids.map(song => song.values).join(",");

  dispatch({
    type: SpotifyActionTypes.GET_SPOTIFY_SONGS_FETCHING
  });
  axios
    .get(`${spotifyBaseUrl}/tracks/?ids=${idString}`, config)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.GET_SPOTIFY_SONGS_SUCCESS,
        payload: res.data.tracks
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_SPOTIFY_SONGS_FAILURE,
        payload: err.response.data
      });
    });
};

export const getSpotifyUser = () => dispatch => {
  dispatch({
    type: SpotifyActionTypes.GET_SPOTIFY_USER_FETCHING
  });

  axios
    .get(`${spotifyBaseUrl}/me`, config)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.GET_SPOTIFY_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_SPOTIFY_USER_FAILURE,
        payload: err.response.data
      });
    });
};

export const getCurrentSong = spotifyState => dispatch => {
  if (spotifyState) {
    console.log(spotifyState);
    dispatch({
      type: SpotifyActionTypes.GET_CURRENT_SONG_SUCCESS,
      payload: spotifyState.track_window.current_track
    });

    dispatch({
      type: SpotifyActionTypes.GET_PLAY_STATUS,
      payload: spotifyState.paused
    });
  } else {
    dispatch({
      type: SpotifyActionTypes.GET_CURRENT_SONG_FETCHING
    });
  }
};
