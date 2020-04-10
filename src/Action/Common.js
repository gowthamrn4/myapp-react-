import {
    GETALLHASHTAG_INIT,
    GETALLHASHTAG_SUCCESS,
    GETALLHASHTAG_ERROR,
    CREAREHASHTAG_INIT,
    CREAREHASHTAG_SUCCESS,
    CREAREHASHTAG_ERROR
} from '../Constants/Common';
import { CommonService } from '../Service/CommonService';
import { TIMELINEPOST } from '../Service/Api';

export const GET_HASHTAG = () => (dispatch) => {
    try {
        dispatch({ type: GETALLHASHTAG_INIT });
        CommonService.GETMETHOD(TIMELINEPOST.GETHASHTAG).then((res) => {
            console.log('res,', res)
            if (res.status == 200) {
                dispatch({ type: GETALLHASHTAG_SUCCESS, payload: res.data })
            }
        })
    } catch (error) {
        dispatch({ type: GETALLHASHTAG_ERROR });
    }
}

export const CREATE_NEWHASHTAG = (val) => (dispatch) => {
    try {
        dispatch({ type: CREAREHASHTAG_INIT })
        CommonService.POSTMETHOD(val, TIMELINEPOST.CREATEHASHTAG).then((res) => {
            if (res.status == 200) {
                dispatch({ type: CREAREHASHTAG_SUCCESS, payload: res.data })
            } else {
                dispatch({ type: CREAREHASHTAG_ERROR })
            }
        })
    } catch (error) {
        console.log(error)
        dispatch({ type: CREAREHASHTAG_ERROR })
    }
}