//action type
const BATTLE_USER = 'BATTLE_USER'
const INITIAL_LOAD = 'INITIAL_LOAD'

//action creator
export const battleUser = userId => {
  return {
    type: BATTLE_USER,
    userId
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
    case BATTLE_USER:
      return state.map(user => {
        if(user.id === action.userId){
          user.challenging = true
        }
        return user
      })
    case INITIAL_LOAD:
      return [...action.users]
    default:
      return state
  }
}

export default playersReducer