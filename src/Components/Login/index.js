import React, { Component } from 'react';
import './login.css';
import { validationService } from '../Validation/service';

// function formatName(user) {
//     return user.firstname + ' ' + user.lastname;
// }

// const user = {
//     firstname: 'Gowtham',
//     lastname: 'rn'
// }

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                username: {
                    type: "generic",
                    value: null
                },
                password: {
                    type: "password",
                    value: null
                },
            }
        }
        this.onInputChange = validationService.onInputChange.bind(this);
        this.getFormValidation = validationService.getFormValidation.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit() {
        this.getFormValidation();
    }

    renderError(id) {
        const { inputs } = this.state;
        if (inputs[id].errorLabel) {
            return <span style={{ color: 'red' }}>{inputs[id].errorLabel}</span>;
        }
        return null;
    }

    render() {
        return (
            <div>
                <div className="Box">
                    <h1>Login</h1>
                    <input type="text" placeholder="Username"
                        onChange={(e) => {
                            let value = e.target.value
                            this.onInputChange({ id: "username", value });
                        }} />
                    {this.renderError("username")}
                    <input type="password" placeholder="Password" onChange={(e) => {
                        let value = e.target.value
                        this.onInputChange({ id: "password", value });
                    }} />
                    {this.renderError("password")}
                    <input type="submit" value="Login" onClick={() => {
                        this.submit();
                    }} />
                </div>
            </div>
        );
    }
}

export default Login;