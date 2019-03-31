//action types
const HANDLE_CHANGE = 'HANDLE_CHANGE'
const SELECTED_BATTLE = 'SELECTED_BATTLE'


//action creators
export const handleChange = search => ({
  type: HANDLE_CHANGE,
  search
})

export const selectedBattle = () => ({  //user has selected someone to challenge to empty the string
  type: SELECTED_BATTLE
})


const initialState = ''

const searchReducer = (state = initialState, action) => {
  switch(action.type){
    case HANDLE_CHANGE:
      return action.search
    case SELECTED_BATTLE:
      return ''
    default:
      return state
  }
}

export default searchReducer