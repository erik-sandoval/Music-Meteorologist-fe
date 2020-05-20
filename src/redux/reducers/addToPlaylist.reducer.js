import SpotifyActionTypes from "../spotify/spotify.types";

const initialState = {
  addedToPlayList: [],
  err: null
};

const addToPlaylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.ADD_TO_PLAYLIST_SUCCESS:
      return {
        ...state
      };
    case SpotifyActionTypes.ADD_TO_PLAYLIST_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default addToPlaylistReducer;
