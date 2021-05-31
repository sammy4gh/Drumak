import {combineReducers} from "redux";
import clipsReducer from "./clipsReducer";
import powerReducer from "./powerReducer";

const reducers = combineReducers({
     clips:clipsReducer,
     power:powerReducer
})

export default reducers;