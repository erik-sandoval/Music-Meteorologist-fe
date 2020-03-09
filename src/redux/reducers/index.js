import { combineReducers } from "redux";
import getDSSongsReducer from "./getDSSongData";
import getSpotifySongsReducer from "./getSpotifySongsReducer";

export default combineReducers({
  getDSSongsReducer,
  getSpotifySongsReducer
});
