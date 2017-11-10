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

export function createRoom(userId, postData) {
  return post(`http://localhost:3000/api/v1/users/${userId}/rooms`, postData);
}

function get(url) {
  return fetch(url).then(res => res.json());
}

export function getUsers() {
  return get("http://localhost:3000/api/v1/users");
}

export function getRooms() {
  return get("http://localhost:3000/api/v1/rooms");
}

function destroy(url) {
  return fetch(url, {
    method: "DELETE"
  }).then(res => res.json())
}

export function userLeaveRoom(userId, roomId){
  return destroy(`http://localhost:3000/api/v1/users/${userId}/rooms/${roomId}`)
}

function patch(url, postData) {
  return fetch(url, {
    method: "PATCH",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(postData)
  }).then(res => res.json())
}

export function joinRoom(userId, roomId, postData){
  return patch(`http://localhost:3000/api/v1/users/${userId}/rooms/${roomId}`, postData)
}
