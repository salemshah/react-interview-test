import {CURRENT_PAGE, PAGINATION} from "./actions";

const initial = {
    itemParPage: 5,
    currentPage: 1,
}

export const paginationReducer = (state = initial, action) => {
    switch (action.type) {
        case PAGINATION:
            return {...state, itemParPage: action.payload, currentPage: 1}
        case CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state
    }
}