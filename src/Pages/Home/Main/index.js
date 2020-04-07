import React, { Component } from 'react';
import Header from '../../../Components/Header/index';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Header user={this.props.user} history={this.props.history} />
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        user: state.AuthReducers.user,
    }
}
// function mapDispatchToProps(dispatch) {
//     return {
//         login: (val) => dispatch(Auth.LOGIN(val)),
//     }
// }

export default connect(mapStateToProps, null)(Dashboard);
