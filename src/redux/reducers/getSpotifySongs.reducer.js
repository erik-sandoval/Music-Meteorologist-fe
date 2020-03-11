import SpotifyActionTypes from "../spotify/spotify.types";

const initialState = {
  spotifySongUris: [],
  spotifySongsFetching: false,
  spotifySongsFetchingSuccess: false,
  spotifySongsFetchingError: null
};

const getSpotifySongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.GET_SPOTIFY_SONGS_FETCHING:
      return {
        spotifySongsFetching: true,
        spotifySongUris: null,
        spotifySongsFetchingSuccess: null,
        spotifySongsFetchingError: null
      };
    case SpotifyActionTypes.GET_SPOTIFY_SONGS_SUCCESS:
      return {
        spotifySongsFetching: false,
        spotifySongsFetchingSuccess: true,
        spotifySongUris: action.payload,
        spotifySongsFetchingError: null
      };
    case SpotifyActionTypes.GET_SPOTIFY_SONGS_FAILURE:
      return {
        spotifySongsFetching: false,
        spotifySongsFetchingSuccess: false,
        spotifySongUris: [],
        spotifySongsFetchingError: action.payload
      };

    default:
      return state;
  }
};

export default getSpotifySongsReducer;
