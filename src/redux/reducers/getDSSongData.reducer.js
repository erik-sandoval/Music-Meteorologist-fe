import DSActionTypes from "../ds/ds.types";

const initialState = {
  dsSongsData: [],
  dsSongsFetching: false,
  dsSongsFetchingSucess: false,
  dsSongsFetchingErr: null
};

const getDSSongsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default getDSSongsReducer;
