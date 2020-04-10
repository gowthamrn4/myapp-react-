
import { combineReducers } from 'redux';
import Auth from './Auth';
import Common from './Common';

export default combineReducers({
    AuthReducers: Auth,
    CommonReducers: Common
});