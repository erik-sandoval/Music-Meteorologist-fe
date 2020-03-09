import { combineReducers } from "redux";
import getUserReducer from "./userReducer";
import likedSongsReducer from "./likedSongsReducer";
import getTrackInfoReducer from "./getTrackInfoReducer";
import currentSongReducer from "./getCurrentSongReducer";
import createPlaylistReducer from "./createPlaylistReducer";
import getPlaylistReducer from "./getPlaylistReducer";
import getCurrentUserReducer from "./getCurrentUserReducer";
import addToPlaylistReducer from "./addToPlaylistReducer";
import removeTrackReducer from "./removeTrackReducer";
import getSongsReducer from "./getSongsReducer";

export default combineReducers({
  getSongsReducer
  // getUserReducer,
  // likedSongsReducer,
  // getTrackInfoReducer,
  // currentSongReducer,
  // queueReducer,
  // createPlaylistReducer,
  // getPlaylistReducer,
  // getCurrentUserReducer,
  // addToPlaylistReducer,
  // removeTrackReducer
});
