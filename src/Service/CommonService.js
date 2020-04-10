import axios from 'axios';
import { MAIN_URL } from './Api';

async function POSTMETHOD(data, baseurl) {
    try {
        let userToken = localStorage.getItem('token');
        let token = JSON.parse(userToken)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        }
        const body = JSON.stringify(data);
        const res = await axios.post(MAIN_URL + baseurl, body, config)
        return res
    } catch (err) {
        // Logout.Logout(err.response.data.msg)
        return err.response.data
    }
}


async function GETMETHOD(baseurl) {
    try {
        let userToken = localStorage.getItem('token');
        let token = JSON.parse(userToken)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        }
        const res = await axios.get(MAIN_URL + baseurl, config);
        return res;
    } catch (err) {
        console.log('err', err)
    }
}

async function PUTMETHOD(data, baseurl) {
    try {
        let userToken = localStorage.getItem('token');
        let token = JSON.parse(userToken)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        }
        const body = JSON.stringify(data);
        const res = await axios.put(MAIN_URL + baseurl + data, {}, config)
        return res
    } catch (err) {
        return err.response
    }
}


async function DELETEMETHOD(baseurl) {
    try {
        let userToken = localStorage.getItem('token');
        let token = JSON.parse(userToken)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        }
        const res = await axios.delete(MAIN_URL + baseurl, config)
        return res;
    } catch (err) {

    }
}

export const CommonService = {
    POSTMETHOD,
    GETMETHOD,
    PUTMETHOD,
    DELETEMETHOD
}