import React from 'react'
import {
    Login,
    Signup,
    Auth
} from '../Pages/Auth';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const Main = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Auth} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Main
