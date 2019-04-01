export const userSearch = (searchStr, users) => { //used to filter out users based on search argument
  const searchQuery = new RegExp(searchStr, 'i') //create regular expression, ignoring the casing 
  return users.filter(player => {               
    if(searchQuery.test(player.firstName) || searchQuery.test(player.lastName)){  
      return true 
    } else {
      return false
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
