import {combineReducers} from "redux";
import reducer from "./reducer";
import clipsReducer from "./clipsReducer";

const reducers = combineReducers({
     myTest : reducer,
     clips:clipsReducer
})

export default reducers;