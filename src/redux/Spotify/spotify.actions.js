import SpotifyActionTypes from "./spotify.types.js";
import axios from "axios";

import { scopes } from "../../utils/spotifyScopes";

const url = "https://music-meteorology.herokuapp.com/";

const spotifyBaseUrl = "https://api.spotify.com/v1";

const spotifyToken = localStorage.getItem("token");

const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "256aebf9b04a4f5480a757f770864028"; // testing ENV

const redirectUri = process.env.REACT_APP_REDIRECT_URL;

export const getSeveralTracks = ids => dispatch => {
  dispatch({
    type: SpotifyActionTypes.GET_SPOTIFY_SONGS_FETCHING
  });
  const config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };
  axios
    .get(`${spotifyBaseUrl}/tracks/?ids=${ids}`, config)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.GET_SPOTIFY_SONGS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_SPOTIFY_SONGS_FAILURE,
        payload: err.data
      });
export const getCurrentSong = spotifyState => dispatch => {
  if (spotifyState) {
    console.log(spotifyState);
    dispatch({
      type: SpotifyActionTypes.GET_CURRENT_SONG_SUCCESS,
      payload: spotifyState.track_window.current_track
    });
  } else {
    dispatch({
      type: SpotifyActionTypes.GET_CURRENT_SONG_FETCHING
    });
  }
};
