//action types
const LOG_IN = 'LOG_IN'
const LOG_OUT = 'LOG_OUT'

//action creators 
export const logIn = user => {
  return {
    type: LOG_IN,
    user
  }
}

export const logOut = () => {
  return {
    type: LOG_OUT
  }
}

const initialState = {  //hardcoded in for now
  firstName: 'Big',
  lastName: 'Mike'
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case LOG_IN:
      return action.user
    case LOG_OUT:
      return {firstName: '', lastName: ''}
    default:
      return state
  }
}

export default authReducer