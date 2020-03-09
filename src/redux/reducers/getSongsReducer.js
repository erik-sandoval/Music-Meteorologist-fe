import SpotifyActionTypes from "../Spotify/spotify.types";
import DSActionTypes from "../DS/ds.types";

const initialState = {
  dsSongsData: [],
  dsSongsFetching: false,
  dsSongsFetchingSucess: false,
  dsSongsFetchingErr: null,
  spotifySongs: [],
  spotifySongsFetching: false,
  spotifySongsFetchingSuccess: false,
  spotifySongsFetchingError: null
};

const getSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DSActionTypes.GET_DS_SONGS_FETCHING:
      return {
        ...state,
        dsSongsFetching: true,
        dsSongsFetchingSucess: false,
        dsSongsFetchingErr: null
      };
    case DSActionTypes.GET_DS_SONGS_SUCCESS:
      return {
        ...state,
        dsSongsData: action.payload.songs,
        dsSongsFetching: false,
        dsSongsFetchingSucess: true,
        dsSongsFetchingErr: null
      };
    case DSActionTypes.GET_DS_SONGS_FAILURE:
      return {
        ...state,
        dsSongsFetching: false,
        dsSongsFetchingSucess: false,
        dsSongsFetchingErr: action.payload
      };

    case SpotifyActionTypes.GET_SPOTIFY_SONGS_FETCHING:
      return {
        ...state,
        spotifySongsFetching: true,
        spotifySongs: null,
        spotifySongsFetchingSuccess: null,
        spotifySongsFetchingError: null
      };
    case SpotifyActionTypes.GET_SPOTIFY_SONGS_SUCCESS:
      return {
        ...state,
        spotifySongsFetchingSuccess: true,
        spotifySongs: action.payload,
        spotifySongsFetchingError: null
      };
    case SpotifyActionTypes.GET_SPOTIFY_SONGS_FAILURE:
      return {
        ...state,
        spotifySongsFetching: false,
        spotifySongsFetchingSuccess: false,
        spotifySongsFetchingError: action.payload
      };

    default:
      return state;
  }
};

export default getSongsReducer;
