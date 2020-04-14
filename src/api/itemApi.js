import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:2743/api/client-catalog";

export function getItems() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveItem(item) {
  return fetch(baseUrl + (item.id || ""), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch(handleError);
}
