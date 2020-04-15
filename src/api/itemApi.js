import { handleResponse, handleError } from "./apiUtils";

export function getItems() {
  const baseUrl = "http://localhost:2743/api/client-catalog";
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveItem(item) {
  const baseUrl = "http://localhost:2743/api/householdItems";

  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(item),
  })
    .then(handleResponse)
    .catch(handleError);
}
