import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './auth.css'


class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        setTimeout(() => {
            let userToken = localStorage.getItem('token');
            let token = JSON.parse(userToken)
            if (token) {
                this.props.history.push('/dashboard');
            } else {
                this.props.history.push('/login');
            }
        }, 5000)
    }

    render() {
        return (
            <div className="Circle">
                <CircularProgress color="secondary" />
            </div>
        );
    }


}

export default Auth;