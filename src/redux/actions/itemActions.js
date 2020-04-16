import * as types from "./actionTypes";
import * as itemApi from "../../api/itemApi";

export function fetchItemsSuccess(householdItems) {
  return { type: types.FETCH_ITEMS_SUCCESS, householdItems };
}

export function fetchItems() {
  return function (dispatch) {
    return itemApi
      .getItems()
      .then((householdItems) => {
        dispatch(fetchItemsSuccess(householdItems));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveItem(householdItem) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    return itemApi
      .saveItem(householdItem)
      .then(() => {
        // techdebt should dispatch Item created action and the item should be added
        // on the reducer to the current state of householdItems. The problem is the nested array
        // state makes it really hard to work with
        dispatch(fetchItems());
      })
      .catch((error) => {
        throw error;
      });
  };
}
