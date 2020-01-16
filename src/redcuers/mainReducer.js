import { GET_FEATURED_CONTENT} from '../actions/types';

const INITIAL_STATE = {
    homePageVideosObjectList: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_FEATURED_CONTENT:
            return {
                ...state,
                homePageVideosObjectList: action.payload
            }

        default: return state
    }
}