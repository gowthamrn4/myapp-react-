import React, { Component } from 'react';

class Dashboard extends Component {
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
    }

    render() {
        return (
            <div className="container">
                <h2>Home</h2>
            </div>
        );
    }
}


export default Dashboard;
