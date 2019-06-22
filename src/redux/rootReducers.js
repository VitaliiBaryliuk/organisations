import { combineReducers } from 'redux'

import searchReducer from './search'

const rootReducers = combineReducers({
    searchReducer,
})

export default rootReducers