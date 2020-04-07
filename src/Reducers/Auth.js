import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../Constants/Auth';

const INITIAL_STATE = {
    user: null,
    token: null,
    loading: false,
    errorMessage: '',
};


export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_INIT:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}