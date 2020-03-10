import { combineReducers } from "redux";
import getDSSongsReducer from "./getDSSongData";
import getSpotifySongsReducer from "./getSpotifySongsReducer";
import getCurrentUserReducer from "./getCurrentUserReducer";
import getCurrentSongReducer from "./getCurrentSongReducer";

export default combineReducers({
  dsSongs: getDSSongsReducer,
  spotifyUris: getSpotifySongsReducer,
  currentUser: getCurrentUserReducer,
  currentSong: getCurrentSongReducer
});
