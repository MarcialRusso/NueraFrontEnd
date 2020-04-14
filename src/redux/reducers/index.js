import { combineReducers } from "redux";
import householdItems from "./householdItemReducer";

const rootReducer = combineReducers({
  householdItems,
});

export default rootReducer;
