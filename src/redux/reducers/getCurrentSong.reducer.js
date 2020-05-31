import SpotifyActionTypes from "../spotify/spotify.types";

const initialState = {
  currentSong: null,
  currentSongFetching: false,
  currentSongFetchingSuccess: false,
  currentSongError: null,
  liked: null,
  localTrackTime: 0
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
        currentSongFetchingSuccess: true,
        localTrackTime: action.payload.songPosition
      };
    case SpotifyActionTypes.GET_CURRENT_SONG_FAILURE:
      return {
        ...state,
        currentSongError: action.payload,
        currentSongFetching: false
      };
    case SpotifyActionTypes.GET_LIKED_STATUS:
      return {
        ...state,
        liked: action.payload
      };
    case SpotifyActionTypes.SET_LOCAL_TRACK_TIME:
      return {
        ...state,
        localTrackTime: state.localTrackTime + 1000
      };
    default:
      return state;
  }
};

export default getCurrentSongReducer;
