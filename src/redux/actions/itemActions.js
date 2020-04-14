import * as types from "./actionTypes";
import * as itemApi from "../../api/itemApi";

export function fetchItemsSuccess(householdItems) {
  return { type: types.FETCH_ITEMS_SUCCESS, householdItems };
}

export function createItemSuccess(item) {
  return { type: types.CREATE_ITEM_SUCCESS, item };
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
      .then((savedItem) => {
        dispatch(createItemSuccess(savedItem));
      })
      .catch((error) => {
        throw error;
      });
  };
}
