import SpotifyActionTypes from "../spotify/spotify.types";

const initialState = {
  currentUser: [],
  currentUserFetching: false,
  error: null
};

const getCurrentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.GET_SPOTIFY_USER_FETCHING:
      return {
        ...state,
        currentUserFetching: true
      };
    case SpotifyActionTypes.GET_SPOTIFY_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        currentUserFetching: false
      };
    case SpotifyActionTypes.GET_SPOTIFY_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        currentUserFetching: false
      };
    default:
      return state;
  }
};

export default getCurrentUserReducer;
