let URL = "http://localhost:8088"

// API Key for custom search API key="AIzaSyAUL5QJH881qJHitxl0rUOlkiDAKl7SUkM"

export default { 

 post(resource, obj){
  return fetch(`${URL}/${resource}`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj) 
  }).then(response => response.json())
 },
 delete(resource, objId){
  return fetch(`${URL}/${resource}/${objId}`, {
    method: "DELETE", 
    headers: {
      "Content-Type": "application/json"
    }, 
  }).then(response => response.json())
 },
 patch(resource, id, obj){
  return fetch(`${URL}/${resource}/${id}`, {
    method: "PATCH", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj) 
  }).then(response => response.json())
 },
 get(obj, id){
  return fetch(`${URL}/${obj}/${id}`).then(response => response.json())
},
 getCardsByAuthor(obj, id, authId){
  return fetch(`${URL}/${obj}/${id}?userId=${authId}`).then(response => response.json())
},
 getUser(user){
   return fetch(`${URL}/users?username=${user}`).then(response => response.json())
 },
 getUserById(user){
   return fetch(`${URL}/users/${user}`).then(response => response.json())
 },
 getCards(userId){
   return fetch(`${URL}/userCards?userId=${userId}`).then(response => response.json())
 },
 searchCards(){
   return fetch(`${URL}/cards`).then(response => response.json())
 },
 getFavoritedCards(userId){
   return fetch(`http://localhost:8088/userCards/?userId=${userId}&_expand=card&favorited=true`).then(response => response.json())
 },
 getExpandedItems(obj, expandId, id, expandedObj){
   return fetch(`${URL}/${obj}/?${expandId}Id=${id}&_expand=${expandedObj}`).then(response => response.json())
 }
}

// http://localhost:8088/cards?find=Nolan&playerName=Nolan