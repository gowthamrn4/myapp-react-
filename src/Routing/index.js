import React from 'react'
import {
    Login,
    Signup,
    Auth
} from '../Pages/Auth';
import {
    Dashboard,
    HashTag
} from '../Pages/Home';
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
export const customHistory = createBrowserHistory();

const Main = () => {
    return (
        <Router history={customHistory} forceRefresh={true}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Auth} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/hashtag" component={HashTag} />
                </Switch>
            </BrowserRouter>
        </Router>
    )
}

export default Main
