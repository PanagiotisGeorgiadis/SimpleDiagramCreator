import { combineReducers } from "redux";

import ArrowReducer from "./ArrowReducer";
import DiagramReducer from "./DiagramReducer";
import EntityReducer from "./EntityReducer";
import MainMenuReducer from "./MainMenuReducer";

const rootReducer = combineReducers({
	ArrowReducer,
	DiagramReducer,
	EntityReducer,
	menuReducer: MainMenuReducer
});


export default rootReducer;
