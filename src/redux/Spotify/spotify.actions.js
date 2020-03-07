import SpotifyActionTypes from "./spotify.types.js";
import axios from "axios";

const url = "https://music-meteorology.herokuapp.com/";

const spotifyBaseUrl = "https://api.spotify.com/v1";

const spotifyToken = localStorage.getItem("token");

export const getUsers = () => dispatch => {
  dispatch({
    type: SpotifyActionTypes.GET_USER_FETCHING
  });
  axios
    .get(`${url}v1/users`)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.GET_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_USER_FAILURE,
        payload: err
      });
    });
};

export const getCurrentUser = spotifyId => dispatch => {
  dispatch({
    type: SpotifyActionTypes.GET_LOGGED_IN_FETCHING
  });
  axios
    .get(`${url}v1/users/spotify/${spotifyId}`)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.GET_LOGGED_IN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_LOGGED_IN_FAILURE,
        payload: err
      });
    });
};

export const getlikedSongs = () => dispatch => {
  dispatch({
    type: SpotifyActionTypes.GET_LIKEDSONGS_FETCHING
  });

  var config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };

  axios
    .get(`${spotifyBaseUrl}/me/tracks?limit=1`, config)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.GET_LIKEDSONGS_SUCCESS,
        payload: res.data.items[0].track.id
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_LIKEDSONGS_FAILURE,
        payload: err
      });
    });
};

export const getTrackInfo = id => dispatch => {
  dispatch({
    type: SpotifyActionTypes.GET_TRACK_INFO_FETCHING
  });

  var config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };

  axios
    .get(`${spotifyBaseUrl}/audio-features/${id}`, config)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.GET_TRACK_INFO_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_TRACK_INFO_FAILURE,
        payload: err.data
      });
    });
};

export const getPlayStatus = status => dispatch => {
  dispatch({
    type: SpotifyActionTypes.GET_PLAY_STATUS,
    payload: status
  });
};

export const getSpotifyAccountDetails = () => dispatch => {
  dispatch({
    type: SpotifyActionTypes.GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FETCHING
  });

  var config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };

  axios
    .get(`${spotifyBaseUrl}/me`, config)
    .then(res => {
      if (!("product" in res.data)) {
        res.data.product = "unprovided";
      }
      dispatch({
        type: SpotifyActionTypes.GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FAILURE,
        payload: err
      });
    });
};

export const getCurrentSong = () => dispatch => {
  dispatch({
    type: SpotifyActionTypes.GET_CURRENT_SONG_FETCHING
  });
  var config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };
  axios
    .get(`${spotifyBaseUrl}/me/player/currently-playing`, config)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.GET_CURRENT_SONG_SUCCESS,
        payload: res.data.item
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_CURRENT_SONG_FAILURE,
        payload: err.data
      });
    });
};

//----------------------POTENTIAL BUG(refer to spotify.types.js)------------------------------------------
export const persistUser = (spotifyUser, playlistId) => dispatch => {
  dispatch({
    type: SpotifyActionTypes.PERSIST_USER_FETCHING
  });
  axios
    .get(`${url}v1/users/spotify/${spotifyUser.id}`)
    .then(res => {
      if (res.status === 200) {
        const user = {
          id: res.data.id,
          email: res.data.email,
          spotify_user_id: res.data.spotify_user_id,
          user_spotify_api_key: Math.floor(
            Math.random() * 99999999999 + 1
          ).toString(),
          date_of_birth: res.data.date_of_birth,
          spotify_product_type: res.data.spotify_product_type,
          display_name: res.data.display_name,
          country: res.data.country,
          profile_image_url: res.data.profile_image_url,
          spotify_playlist_id:
            playlistId === undefined ? res.data.spotify_playlist_id : playlistId
        };
        axios
          .put(`${url}v1/users/${res.data.id}`, user)
          .then(res => {
            dispatch({ type: SpotifyActionTypes.PERSIST_USER_SUCCESS });
          })
          .catch(err => {
            dispatch({
              type: SpotifyActionTypes.PERSIST_USER_FAILURE
            });
          });
      }
    })
    .catch(err => {
      if (err.message === "Request failed with status code 404") {
        axios.post(`${url}v1/users/register`, {
          email: spotifyUser.email,
          spotify_user_id: spotifyUser.id,
          user_spotify_api_key: Math.floor(
            Math.random() * 99999999999 + 1
          ).toString(),
          date_of_birth: "2019-07-29",
          spotify_product_type: spotifyUser.product,
          display_name: spotifyUser.display_name,
          country: spotifyUser.country,
          profile_image_url: "",
          spotify_playlist_id: playlistId
        });
      }
      /* dispatch({ type: SpotifyActionTypes.PERSIST_USER_SUCCESS, payload: err }); */
    });
};
//--------------------------------------------------------------------------------------------

export const getSeveralTracks = ids => dispatch => {
  dispatch({
    type: SpotifyActionTypes.GET_SEVERAL_TRACKS_FETCHING
  });
  var config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };
  axios
    .get(`${spotifyBaseUrl}/tracks/?ids=${ids}`, config)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.GET_SEVERAL_TRACKS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_SEVERAL_TRACKS_FAILURE,
        payload: err.data
      });
    });
};

export const createPlaylist = spotifyId => dispatch => {
  dispatch({
    type: SpotifyActionTypes.CREATE_PLAYLIST_FETCHING
  });
  var config = {
    headers: {
      Authorization: "Bearer " + spotifyToken,
      "Content-Type": "application/json"
    }
  };
  var playlistName = {
    name: "Sound Drip Playlist",
    description: "A playlist of songs curated by Sound Drip"
  };
  axios
    .post(
      `${spotifyBaseUrl}/users/${spotifyId}/playlists`,
      playlistName,
      config
    )

    .then(res => {
      dispatch({
        type: SpotifyActionTypes.CREATE_PLAYLIST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.CREATE_PLAYLIST_FAILURE,
        payload: err
      });
    });
};

export const getPlaylist = playlistId => dispatch => {
  dispatch({
    type: SpotifyActionTypes.GET_PLAYLIST_FETCHING
  });

  var config = {
    headers: { Authorization: "Bearer " + spotifyToken }
  };

  axios
    .get(`${spotifyBaseUrl}/playlists/${playlistId}/tracks`, config)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.GET_PLAYLIST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.GET_PLAYLIST_FAILURE,
        payload: err
      });
    });
};

export const addToPlaylist = (songs, playlistId) => dispatch => {
  dispatch({
    type: SpotifyActionTypes.ADD_TO_PLAYLIST_FETCHING
  });

  var config = {
    headers: { Authorization: "Bearer " + spotifyToken },
    "Content-Type": "application/json"
  };

  axios
    .post(`${spotifyBaseUrl}/playlists/${playlistId}/tracks`, songs, config)
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.ADD_TO_PLAYLIST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.ADD_TO_PLAYLIST_FAILURE,
        payload: err
      });
    });
};

export const removeTrack = (playlistId, currentlyPlayingSong) => dispatch => {
  dispatch({
    type: SpotifyActionTypes.REMOVE_TRACK_FETCHING
  });
  axios({
    method: "delete",
    url: `${spotifyBaseUrl}/playlists/${playlistId}/tracks`,
    headers: {
      Authorization: "Bearer " + spotifyToken,
      "Content-Type": "application/json"
    },
    data: {
      tracks: [
        {
          uri: `spotify:track:${currentlyPlayingSong}`
        }
      ]
    }
  })
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.REMOVE_TRACK_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.REMOVE_TRACK_FAILURE,
        payload: err
      });
    });
};

export const saveLikedSong = songId => dispatch => {
  dispatch({
    type: SpotifyActionTypes.PUT_LIKEDSONG_START
  });

  axios({
    method: "put",
    url: `${spotifyBaseUrl}/me/tracks?ids=${songId}`,
    headers: {
      Authorization: "Bearer " + spotifyToken,
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      dispatch({
        type: SpotifyActionTypes.PUT_LIKEDSONG__SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SpotifyActionTypes.PUT_LIKEDSONG__FAILURE,
        payload: err
      });
    });
};
