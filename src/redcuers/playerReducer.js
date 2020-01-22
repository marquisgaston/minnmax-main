import {
    CHANGE_PLAYER_URL,
    LOAD_VIDEO_INFO,
    CHECK_IS_PLAYING,
    ADD_TO_PLAYLIST
} from '../actions/types';

const INITIAL_STATE = {
    playerUrl: null,
    snippet: {
        "publishedAt": "2020-01-14T00:28:15.000Z",
        "channelId": "UCiUhKqsBH-Is2VeC2sykEfg",
        "title": "PlayStation Will Not Be At E3 2020 - Max News",
        "description": "MinnMax's Ben Hanson unpacks the big news today that PlayStation won't be attending E3 2020, which is a major blow to the biggest gaming show of the year and the ESA overall. Despite having a lot of PlayStation 5 and PlayStation 4 news to share this year, PlayStation instead will be attending other events and most likely leaning on their own State of Play streaming format.\n\nBuy MinnMax merch here - https://minnmax.com/merch\nFollow us on Twitter - https://twitter.com/minnmaxshow\nGo behind the scenes on Instagram - https://www.instagram.com/minnmaxshow\nFollow us on Twitch - https://www.twitch.tv/minnmaxshow\nPlease support us on Patreon - https://www.patreon.com/minnmax",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/d5VyR9Q93ec/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/d5VyR9Q93ec/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/d5VyR9Q93ec/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/d5VyR9Q93ec/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            "maxres": {
                "url": "https://i.ytimg.com/vi/d5VyR9Q93ec/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            }
        },
        "channelTitle": "MinnMaxShow",
        "playlistId": "UUiUhKqsBH-Is2VeC2sykEfg",
        "position": 1,
        "resourceId": {
            "kind": "youtube#video",
            "videoId": "d5VyR9Q93ec"
        }
    },
    videoIsPlaying: false,
    playlist: [],
    playlistCounter: 0
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case CHANGE_PLAYER_URL:
            return {
                ...state,
                playerUrl: action.payload
            }
        case LOAD_VIDEO_INFO:
            return {
                ...state,
                snippet: action.payload
            }
        case CHECK_IS_PLAYING:
            return {
                ...state,
                videoIsPlaying: action.payload
            }
        case ADD_TO_PLAYLIST:
            return {
                ...state,
                playlistCounter: state.playlistCounter ++,
                playlist: state.playlist.concat({playlistItem: action.payload,id: state.playlistCounter})
            }
        default: return state;
    }
}