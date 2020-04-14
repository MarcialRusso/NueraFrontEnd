import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function householdItemReducer(
  state = initialState.householdItems,
  action
) {
  switch (action.type) {
    case types.CREATE_ITEM_SUCCESS:
      return [...state, { ...action.householdItem }];
    case types.FETCH_ITEMS_SUCCESS:
      return action.householdItems;
    default:
      return state;
  }
}
