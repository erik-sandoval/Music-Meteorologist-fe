import SpotifyActionTypes from "./spotify.types.js";
import axios from "axios";
import playlistSongComponent from "../../components/playlist-song/playlist-song.component.jsx";

const spotifyBaseUrl = "https://api.spotify.com/v1";

export const getSeveralTracks = ids => dispatch => {
  const spotifyToken = localStorage.getItem("token");

  const config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };
  const idString = ids.map(song => song.values).join(",");

  dispatch({
    type: SpotifyActionTypes.GET_SPOTIFY_SONGS_FETCHING
  });
  axios
    .get(`${spotifyBaseUrl}/tracks/?ids=${idString}`, config)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.GET_SPOTIFY_SONGS_SUCCESS,
        payload: res.data.tracks.map(track => ({ ...track, liked: false }))
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_SPOTIFY_SONGS_FAILURE,
        payload: err
      });
    });
};

export const getSpotifyUser = () => dispatch => {
  const spotifyToken = localStorage.getItem("token");

  const config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };
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
  const spotifyToken = localStorage.getItem("token");

  const config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };

  axios
    .get(`${spotifyBaseUrl}/me/player`, config)
    .then(res => {
      console.log(res);
      if (spotifyState) {
        dispatch({
          type: SpotifyActionTypes.GET_CURRENT_SONG_SUCCESS,
          payload: {
            ...spotifyState.track_window.current_track,
            songPosition: spotifyState.position,
            paused: spotifyState.paused
          },
          shuffledStatus: res.data.shuffle_state
        });
      } else {
        dispatch({
          type: SpotifyActionTypes.GET_CURRENT_SONG_FETCHING
        });
      }
    })
    .catch(err => {});
};

export const getLikedSongStatus = songId => dispatch => {
  const spotifyToken = localStorage.getItem("token");

  const config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };

  return axios
    .get(`${spotifyBaseUrl}/me/tracks/contains?ids=${songId}`, config)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.GET_LIKED_STATUS,
        payload: res.data[0]
      });

      return res.data[0];
    })
    .catch(err => {});
};

export const toggleShuffle = shuffleState => dispatch => {
  const spotifyToken = localStorage.getItem("token");

  const config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };

  axios
    .put(
      `${spotifyBaseUrl}/me/player/shuffle?state=${!shuffleState}`,
      {},
      config
    )
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.TOGGLE_SHUFFLE_STATE,
        payload: shuffleState
      });
    })
    .catch(err => {});
};

export const getChartTrackInfo = id => dispatch => {
  const spotifyToken = localStorage.getItem("token");

  const config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };

  const chartFeatures = axios.get(
    `${spotifyBaseUrl}/audio-features/${id}`,
    config
  );

  const popularReq = axios.get(`${spotifyBaseUrl}/tracks/${id}`, config);

  dispatch({
    type: SpotifyActionTypes.GET_CHART_INFO_FETCHING
  });

  axios
    .all([chartFeatures, popularReq])
    .then(
      axios.spread((chart, popular) => {
        dispatch({
          type: SpotifyActionTypes.GET_CHART_INFO_SUCCESS,
          payload: { ...chart.data, popularity: popular.data.popularity }
        });
      })
    )
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_CHART_INFO_FAILURE,
        payload: err.data
      });
    });
};

export const setLocalTrackTime = () => dispatch => {
  dispatch({ type: SpotifyActionTypes.SET_LOCAL_TRACK_TIME });
};

export const addToPlaylist = (tracksToAdd, spotifyId) => dispatch => {
  const spotifyToken = localStorage.getItem("token");

  const config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };

  axios.get("https://api.spotify.com/v1/me/playlists", config).then(res => {
    const playlists = res.data.items;
    if (playlists.length > 0) {
      const newPlaylist = playlists.map(
        playlist => playlist.name === "Sound Drip Playlist"
      );

      if (newPlaylist.length > 0) {
        axios.post(
          `https://api.spotify.com/v1/playlists/${newPlaylist[0].id}/tracks`,
          { uris: tracksToAdd },
          config
        );
      } else {
        axios.post(
          `https://api.spotify.com/v1/users/${spotifyId}/playlists`,
          { name: "Sound Drip Playlist" },
          config
        );
      }
    }
  });
};
