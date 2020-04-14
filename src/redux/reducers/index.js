import { combineReducers } from "redux";
import householdItems from "./itemReducer";

const rootReducer = combineReducers({
  householdItems,
});

export default rootReducer;
