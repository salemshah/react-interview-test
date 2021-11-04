import {combineReducers} from "redux"
import {filmReducer} from "./filmReducer"
import {paginationReducer} from "./paginationReducer"

const rootReducer = combineReducers( {
    getFilms: filmReducer,
    pagination: paginationReducer
})

export default rootReducer