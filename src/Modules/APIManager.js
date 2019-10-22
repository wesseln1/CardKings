let URL = "http://localhost:8088"

// API Key for custom search API key="AIzaSyAUL5QJH881qJHitxl0rUOlkiDAKl7SUkM"

export default {

  // getEvents = value => {
  //   fetch(`https://api.mysportsfeeds.com/v2.1/pull/nhl/players.team=${value}`, {
  //     headers: {
  //       "Authorization": "Basic " + btoa({ea2d0048ce5a4a16ae0083d4d7} + ":" + MYSPORTSFEEDS)
  //     }
  //   });
  // },
  
//  getSearch(search){
//    return fetch(`https://www.googleapis.com/customsearch/v1/`)
//  } 

 post(resource, obj){
   console.log("here i am")
  return fetch(`${URL}/${resource}`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj) 
  }).then(response => response.json())
 },
 get(obj, id){
   console.log("at fetch", id)
  return fetch(`${URL}/${obj}/${id}`).then(response => response.json())
},
 getUser(user){
   return fetch(`${URL}/users?username=${user}`).then(response => response.json())
 },
 getUserById(user){
   console.log("in fetch",user)
   return fetch(`${URL}/users/${user}`).then(response => response.json())
 },
 getCards(cards, userId){
   return fetch(`${URL}/${cards}?userId=${userId}`).then(response => response.json())
 },
 getExpandedItems(obj, expandId, id, expandedObj){
   return fetch(`${URL}/${obj}/?${expandId}Id=${id}&_expand=${expandedObj}`).then(response => response.json())
 }
}

// http://localhost:8088/users/?collectorLevelId=1&expand=collectorLevel
// http://localhost:8088/friends/?initiatorId=${user}&_expand=user