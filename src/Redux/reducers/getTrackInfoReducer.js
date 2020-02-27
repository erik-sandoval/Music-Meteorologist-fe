import SpotifyActionTypes from "../Spotify/spotify.types";

const initialState = {};

const getTrackInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.GET_TRACK_INFO_FETCHING:
    case SpotifyActionTypes.GET_TRACK_INFO_SUCCESS:
    case SpotifyActionTypes.GET_TRACK_INFO_FAILURE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default getTrackInfoReducer;
