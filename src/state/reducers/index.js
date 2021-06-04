import {combineReducers} from "redux";
import clipsReducer from "./clipsReducer";
import powerReducer from "./powerReducer";
import volumeReducer from "./volumeReducer";

const reducers = combineReducers({
     clips:clipsReducer,
     power:powerReducer,
     volume:volumeReducer,

})

export default reducers;