import {
    LOGIN_INIT,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../Constants/Auth';
import { userService } from '../Service/AuthService';
import history from '../Routing/history';

export const LOGIN = (val) => (dispatch) => {
    console.log('action ', val)
    try {
        dispatch({ type: LOGIN_INIT });
        userService.login(val).then((res) => {
            console.log(res)
            if (res.status === 200) {
                dispatch({ type: LOGIN_SUCCESS, payload: res.data });
                history.push('/dashboard')
                // browserHistory.push("/dashboard");
            } else {
                dispatch({ type: LOGIN_ERROR });
            }
        })
    } catch (error) {
        dispatch({ type: LOGIN_ERROR });
    }
}