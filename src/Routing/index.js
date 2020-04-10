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
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import Header from '../Components/Header';

const Main = () => {
    return (
        <Router history={history} forceRefresh={true}>
            <Switch>
                <Route exact path="/" component={Auth} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Switch>
                    {/* <Header /> */}
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/hashtag" component={HashTag} />
                </Switch>
            </Switch>
        </Router>
    )
}

export default Main
