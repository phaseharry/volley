/*
export const userSearch = (searchStr, users) => { //used to filter out users based on search argument
  const searchQuery = new RegExp(searchStr, 'i') //create regular expression, ignoring the casing 
  return users.filter(player => {               
    if(searchQuery.test(player.firstName) /){   //will only sort filter by first name for now
      return true 
    } else {
      return false
    }
  })
}
*/
//position of the query didn't matter in the filter function above

export const userSearch = (searchStr, users) => {
  const searchLowerCase = searchStr.toLowerCase()
  return users.filter(player => {
    const firstName = player.firstName
    const lastName = player.lastName
    if(firstName.toLowerCase().indexOf(searchLowerCase) === 0 || lastName.toLowerCase().indexOf(searchLowerCase) === 0){
      return true
    }
  })
}

export const sortAlphabetically = users => {
  return users.sort((p1, p2) => {
    if(p1.firstName > p2.firstName){
      return 1
    } else if(p1.firstName < p2.firstName){
      return -1
    } else {
      return 0
    }
  })  
}

export const sortChallenges = users => { 
  return users.filter(player => player.challenging) //returns all the users you're currently challenging
}

export const randomUser = users => {  //returns a random user based on users the player is not challenging
  const potentialOpponents = users.filter(player => !player.challenging)
  const randomIdx = Math.floor(Math.random() * potentialOpponents.length)
  return potentialOpponents[randomIdx]
}

export const findUser = (userId, players) => {
  return players.find(player => player.id === userId)
}