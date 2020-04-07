// import React, { Component } from 'react';
// import './login.css';
// import { validationService } from '../Validation/service';

// // function formatName(user) {
// //     return user.firstname + ' ' + user.lastname;
// // }

// // const user = {
// //     firstname: 'Gowtham',
// //     lastname: 'rn'
// // }

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             inputs: {
//                 username: {
//                     type: "generic",
//                     value: null
//                 },
//                 password: {
//                     type: "password",
//                     value: null
//                 },
//             }
//         }
//         this.onInputChange = validationService.onInputChange.bind(this);
//         this.getFormValidation = validationService.getFormValidation.bind(this);
//         this.submit = this.submit.bind(this);
//     }

//     submit() {
//         this.getFormValidation();
//     }

//     renderError(id) {
//         const { inputs } = this.state;
//         if (inputs[id].errorLabel) {
//             return <span style={{ color: 'red' }}>{inputs[id].errorLabel}</span>;
//         }
//         return null;
//     }

//     render() {
//         return (
//             <div>
//                 <div className="Box">
//                     <h1>Login</h1>
//                     <input type="text" placeholder="Username"
//                         onChange={(e) => {
//                             let value = e.target.value
//                             this.onInputChange({ id: "username", value });
//                         }} />
//                     {this.renderError("username")}
//                     <input type="password" placeholder="Password" onChange={(e) => {
//                         let value = e.target.value
//                         this.onInputChange({ id: "password", value });
//                     }} />
//                     {this.renderError("password")}
//                     <input type="submit" value="Login" onClick={() => {
//                         this.submit();
//                     }} />
//                 </div>
//             </div>
//         );
//     }
// }

// export default Login;


import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function Login() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
                    <div>
                        <FormControl className={classes.margin}>
                            <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
                            <Input
                                id="input-with-icon-adornment"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <TextField
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="TextField"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                </Typography>
            </Container>
        </React.Fragment>
    );
}