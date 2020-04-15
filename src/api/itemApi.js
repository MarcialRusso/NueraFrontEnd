import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:2743/api/client-catalog";

export function getItems() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveItem(householdItemRequest) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(householdItemRequest),
  })
    .then(handleResponse)
    .catch(handleError);
}
