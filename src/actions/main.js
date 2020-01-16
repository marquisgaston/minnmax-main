import{ GET_FEATURED_CONTENT } from './types';

export function getFeaturedContent (homePageVideosObjectList) {
    return ({
        type: GET_FEATURED_CONTENT,
        payload: homePageVideosObjectList
    })
}