//action type
const NEW_CHALLEGE = 'NEW_CHALLENGE'
const INITIAL_LOAD = 'INITIAL_LOAD'

//action creator
export const newChallenge = user => {
  return {
    type: NEW_CHALLEGE,
    user
  }
}

export const initialLoad = users => {
  return {
    type: INITIAL_LOAD,
    users
  }
}

const initialState = [] //represents an array of players

//currently will store every player we have in state
//will need to figure out a way to seperate players user is challenging versus everyone else

const playersReducer = (state = initialState, action) => {
  switch(action.type){
    case NEW_CHALLEGE:
      return [...state, action.user]
    case INITIAL_LOAD:
      return [...action.users]
    default:
      return state
  }
}

export default playersReducer