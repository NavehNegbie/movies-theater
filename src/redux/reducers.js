import { INIT_DATA } from './actionTypes';

const initState = {
    movies: []
}

export const rootReducer = (state = initState, action) => {
    switch (action.type) {

        case INIT_DATA:

            return {
                ...state,
                movies: action.data
            }

        default: return state
    }
}
