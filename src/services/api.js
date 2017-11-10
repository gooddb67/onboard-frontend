function post(url, postData) {
  return fetch(url, {
    method: "post",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(postData)
  }).then(res => res.json());
}

export function createUser(postData) {
  return post("http://localhost:3000/api/v1/users", postData);
}

function get(url) {
  return fetch(url).then(res => res.json());
}

export function getRooms() {
  return get("http://localhost:3000/api/v1/users");
}
