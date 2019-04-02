//action types
const HANDLE_CHANGE = 'HANDLE_CHANGE'
const RESET_SEARCH = 'RESET_SEARCH'


//action creators
export const handleChange = search => ({
  type: HANDLE_CHANGE,
  search
})

export const resetSearch = () => ({  //user has selected someone to challenge to empty the string
  type: RESET_SEARCH
})


const initialState = ''

const searchReducer = (state = initialState, action) => {
  switch(action.type){
    case HANDLE_CHANGE:
      return action.search
    case RESET_SEARCH:
      return ''
    default:
      return state
  }
}

export default searchReducer