import {DELETE_FILM, DISLIKE, FILTER, GET_FILMS, LIKE, SEARCH} from "./actions"
import films from "../data/films.json"

const initials = {
    films: [],
    filter: [],
    search: "",
}

const doFilter = (state, action, data) => {
    return {...state, filter: action, films: data.filter(item => action.indexOf(item.category) > -1)}
}

const doSearch = (state, payload, data) => {
    return {
        ...state,
        search: payload,
        films: data.filter(item => item.title.toLowerCase().includes(payload.toLowerCase()))
    }
}

export const filmReducer = (state = initials, action) => {

    switch (action.type) {
        case GET_FILMS:
            return {...state, films: films}
        case DELETE_FILM:
            return {...state, films: state.films.filter(item => item.id !== action.payload)}
        case SEARCH:
            const payloadSearch = action.payload
            if (state.filter.length) {
                const resultFilter = doFilter(state, state.filter, films).films
                return payloadSearch ? doSearch(state, payloadSearch, resultFilter) : doFilter(state, state.filter, films)
            }
            return doSearch(state, payloadSearch, films)
        case FILTER:
            return action.payload.length ? doFilter(state, action.payload, films) : {...state, films: films}
        case LIKE:
            return {
                ...state, films: state.films.map(item => item.id === action.payload ? {
                    ...item,
                    dislike: true,
                    like: true
                } : item)
            }
        case DISLIKE:
            return {
                ...state, films: state.films.map(item => item.id === action.payload ? {
                    ...item,
                    dislike: false,
                    like: false
                } : item)
            }
        default:
            return state
    }
}
