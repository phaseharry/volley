import { createStore, combineReducers } from 'redux'

import auth from './Reducers/Auth'
import players from './Reducers/Players'

const reducer = combineReducers({
  auth,
  players
})

const store = createStore(reducer)

export default store