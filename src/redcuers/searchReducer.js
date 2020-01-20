import {
    SET_SEARCH_TERM
} from '../actions/types';

const INITIAL_STATE = {
    seacrhTerm: null
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case SET_SEARCH_TERM:
            return {
                ...state,
                seacrhTerm: action.payload
            }
        default: return state
    }
}