import axios from 'axios';
import { MAIN_URL, BASE_URL } from './Api';

const config = {
    headers: {
        'Content-Type': 'application/json',
    }
}

async function login(data) {
    try {
        const body = JSON.stringify(data);
        const res = await axios.post(MAIN_URL + BASE_URL.LOGIN, body, config);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err)
    }
}

async function signup(data) {
    try {
        const body = JSON.stringify(data);
        const res = await axios.post(MAIN_URL + BASE_URL.REGISTER, body, config)
        return res;
    } catch (err) {
        return err.response.data
    }
}

async function forgetPassword(data) {
    console.log(data)
    try {
        const body = JSON.stringify(data);
        const res = await axios.post(MAIN_URL + BASE_URL.FORGETPASSWORD, body, config)
        return res
    } catch (err) {
        console.log(err.response.data)
        return err.response.data
    }
}

async function GetQuestion() {
    try {
        const res = await axios.get(MAIN_URL + BASE_URL.GETQUESTION, config)
        console.log('res,', res)
        return res
    } catch (err) {
        console.log(err)
        return err.response.data
    }
}

async function changePassword(data) {
    console.log(data)
    try {
        const body = JSON.stringify(data);
        const res = await axios.post(MAIN_URL + BASE_URL.RESETPASSWORD, body, config)
        return res
    } catch (err) {
        console.log(err.response.data)
        return err.response.data
    }
}


export const userService = {
    login,
    signup,
    GetQuestion,
    forgetPassword,
    changePassword
}
