import{ 
    GET_FEATURED_CONTENT,
    GET_CAROUSEL_CONTENT
 } from './types';

export function getFeaturedContent (homePageVideosObjectList) {
    return ({
        type: GET_FEATURED_CONTENT,
        payload: homePageVideosObjectList
    })
}

export function getCarouselContent (videoCarouselVideosObjectList) {
    console.log(videoCarouselVideosObjectList)
    return ({
        type: GET_CAROUSEL_CONTENT,
        payload: videoCarouselVideosObjectList
    })
}

