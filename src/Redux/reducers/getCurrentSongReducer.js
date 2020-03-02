import SpotifyActionTypes from "../Spotify/spotify.types";

const initialState = {
  item: [],
  imageUrl: [],
  fetchingSongError: "",
  playing: false
};

const currentSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.GET_CURRENT_SONG_FETCHING:
      return {
        ...state,
        fetchingSongError: ""
      };
    case SpotifyActionTypes.GET_CURRENT_SONG_SUCCESS:
      return {
        ...state,
        item: action.payload,
        fetchingSongError: ""
      };
    case SpotifyActionTypes.GET_CURRENT_SONG_FAILURE:
      return {
        ...state,
        fetchingSongError: action.payload
      };
    case SpotifyActionTypes.GET_PLAY_STATUS:
      return {
        ...state,
        playing: action.payload
      };
    default:
      return state;
  }
};

export default currentSongReducer;
