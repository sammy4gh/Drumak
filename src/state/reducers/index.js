import {combineReducers} from "redux";
import clipsReducer from "./clipsReducer";
import powerReducer from "./powerReducer";
import volumeReducer from "./volumeReducer";
import displayReducer from "./displayReducer";

const reducers = combineReducers({
     clips:clipsReducer,
     power:powerReducer,
     volume:volumeReducer,
     display:displayReducer

})

export default reducers;