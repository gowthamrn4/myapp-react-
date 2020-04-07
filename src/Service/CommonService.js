import axios from 'axios';
import checkAsyncStorage from '../Components/Storage';
import { MAIN_URL } from './API_URL';

async function POSTMETHOD(data, baseurl) {
    try {
        const userToken = await checkAsyncStorage();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': userToken.token
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
    console.log('base', baseurl)
    try {
        const userToken = await checkAsyncStorage();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': userToken.token
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
        const userToken = await checkAsyncStorage();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': userToken.token
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
        const userToken = await checkAsyncStorage();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': userToken.token
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