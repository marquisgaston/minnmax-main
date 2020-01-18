import { 
    GET_FEATURED_CONTENT,
    GET_CAROUSEL_CONTENT
} from '../actions/types';

const INITIAL_STATE = {
    homePageVideosObjectList: [],
    VideosObjectList: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_FEATURED_CONTENT:
            return {
                ...state,
                homePageVideosObjectList: action.payload
            }
        case GET_CAROUSEL_CONTENT:
            console.log("AP", action.payload)
            return {
                ...state,
                VideosObjectList: action.payload
            }

        default: return state
    }
}