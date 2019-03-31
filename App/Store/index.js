import { createStore, combineReducers } from 'redux'

import auth from './Reducers/Auth'
import players from './Reducers/Players'
import search from './Reducers/Search'

const reducer = combineReducers({
  auth,
  players,
  search
})

const store = createStore(reducer)

export default store