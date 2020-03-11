import SpotifyActionTypes from "../spotify/spotify.types";

const initialState = {
  currentSong: null,
  currentSongFetching: false,
  currentSongFetchingSuccess: false,
  currentSongError: null,
  paused: false,
  liked: null
};

const getCurrentSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.GET_CURRENT_SONG_FETCHING:
      return {
        ...state,
        currentSongError: null,
        currentSongFetching: true
      };
    case SpotifyActionTypes.GET_CURRENT_SONG_SUCCESS:
      return {
        ...state,
        currentSong: action.payload,
        currentSongError: null,
        currentSongFetching: false,
        currentSongFetchingSuccess: true
      };
    case SpotifyActionTypes.GET_CURRENT_SONG_FAILURE:
      return {
        ...state,
        currentSongError: action.payload,
        currentSongFetching: false
      };
    case SpotifyActionTypes.GET_PLAY_STATUS:
      return {
        ...state,
        paused: action.payload
      };
    case SpotifyActionTypes.GET_LIKED_STATUS:
      return {
        ...state,
        liked: action.payload
      };
    default:
      return state;
  }
};

export default getCurrentSongReducer;