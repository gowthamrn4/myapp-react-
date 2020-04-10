import {
    GETALLHASHTAG_INIT,
    GETALLHASHTAG_SUCCESS,
    GETALLHASHTAG_ERROR,
    CREAREHASHTAG_INIT,
    CREAREHASHTAG_SUCCESS,
    CREAREHASHTAG_ERROR
} from '../Constants/Common';


const INITIAL_STATE = {
    allTags: [],
    allTrendingTags: [],
    loading: false
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case GETALLHASHTAG_INIT:
            return {
                ...state,
                loading: true
            }
        case GETALLHASHTAG_SUCCESS:
            return {
                ...state,
                loading: false,
                allTags: payload.allTags,
                allTrendingTags: payload.allTrendingTags
            }
        case GETALLHASHTAG_ERROR:
            return {
                ...state,
                loading: false
            }
        case CREAREHASHTAG_INIT:
            return {
                ...state,
                loading: true
            }
        case CREAREHASHTAG_SUCCESS:
            return {
                ...state,
                loading: false,
                allTags: [...state.allTags, payload]
            }
        case CREAREHASHTAG_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}