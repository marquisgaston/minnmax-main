import {
    CHANGE_PLAYER_URL,
    LOAD_VIDEO_INFO,
    CHECK_IS_PLAYING,
    CHECK_SHOW_THUMB
} from './types';

export function changePlayerUrl(url) {
    return ({
        type: CHANGE_PLAYER_URL,
        payload: url
    })
}

export function loadVideoInfo(snippet) {
    return ({
        type: LOAD_VIDEO_INFO,
        payload: snippet
    })
}

export function checkIsPlaying(boolean){
    return ({
        type: CHECK_IS_PLAYING,
        payload: boolean
    })
}

export function checkShowThumb(boolean){
    return ({
        type: CHECK_SHOW_THUMB,
        payload: boolean
    })
}
