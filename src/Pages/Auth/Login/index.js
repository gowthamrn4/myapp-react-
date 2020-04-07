import React, { Component } from 'react';
import './login.css';
import { validationService } from '../../../Components/Validation/service';
import * as Auth from '../../../Action/Auth';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                username: {
                    type: "email",
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
            return <span style={{ color: 'red', fontSize: '12px' }}>{inputs[id].errorLabel}</span>;
        }
        return null;
    }

    render() {
        return (
            <div className="container">
                <div className="form">
                    <div className="sign-in-section">
                        <h1>Log in</h1>
                        <div className="form-field">
                            <label for="email">Email</label>
                            <input id="email" type="email" placeholder="Email"
                                onChange={(e) => {
                                    let value = e.target.value
                                    this.onInputChange({ id: "username", value });
                                }}
                            />
                            {this.renderError("username")}
                        </div>
                        <div className="form-field">
                            <label for="password">Password</label>
                            <input id="password" type="password" placeholder="Password"
                                onChange={(e) => {
                                    let value = e.target.value
                                    this.onInputChange({ id: "password", value });
                                }}
                            />
                            {this.renderError("password")}

                        </div>
                        <div className="form-options">
                            <div className="checkbox-field">
                                <input id="rememberMe" type="checkbox" className="checkbox" />
                                <label for="rememberMe">Remember Me</label>
                            </div>
                            <a>Forgot Password?</a>
                        </div>
                        <div className="form-field">
                            <input type="submit" className="btn btn-signin" value="Submit"
                                onClick={() => {
                                    this.submit();
                                    if (this.state.inputs.username.value !== null && this.state.inputs.password.value !== null) {
                                        let innerData = {
                                            email: this.state.inputs.username.value,
                                            password: this.state.inputs.password.value,
                                            registrationType: "Native"
                                        }
                                        this.props.login(innerData)
                                    }
                                }}
                            />
                        </div>
                        <div className="links">
                            <a>Privacy Policy</a>
                            <a>Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.AuthReducers.data,
        loading: state.AuthReducers.loading,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        login: (val) => dispatch(Auth.LOGIN(val)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
