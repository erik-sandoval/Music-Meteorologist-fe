import { combineReducers } from "redux";
import getDSSongsReducer from "./getDSSongData.reducer";
import getSpotifySongsReducer from "./getSpotifySongs.reducer";
import getCurrentUserReducer from "./getCurrentUser.reducer";
import getCurrentSongReducer from "./getCurrentSong.reducer";
import getChartTrackInfoReducer from "./getChartTrackInfo.reducer";
export default combineReducers({
  dsSongs: getDSSongsReducer,
  spotifyUris: getSpotifySongsReducer,
  currentUser: getCurrentUserReducer,
  currentSong: getCurrentSongReducer,
  chartInfo: getChartTrackInfoReducer
});
