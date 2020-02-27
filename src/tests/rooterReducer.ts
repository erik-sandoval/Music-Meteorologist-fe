import { combineReducers } from "redux";
import queueReducer from '../Redux/reducers/queueReducer';

export const rootReducer = combineReducers({
    queueReducer
});

export type AppState = ReturnType<typeof rootReducer>