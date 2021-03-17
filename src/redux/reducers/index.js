import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import categoriesReducer from './categoriesReducer'
import filtersReducer from './filters'
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
    categories: categoriesReducer,
    cart: cartReducer
})

export default rootReducer