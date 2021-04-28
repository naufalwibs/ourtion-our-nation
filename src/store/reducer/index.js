import { combineReducers } from 'redux'
import favoritesReducer from './favoritesReducer'
import countriesReducer from './countriesReducer'

const reducer = combineReducers ({
    countriesReducer,
    favoritesReducer
})

export default reducer