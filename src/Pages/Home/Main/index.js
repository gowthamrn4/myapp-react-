import React, { Component, forwardRef } from 'react';
import Header from '../../../Components/Header/index';
import { connect } from 'react-redux';
import * as Common from '../../../Action/Common';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.props.gethashtag()
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

function mapDispatchToProps(dispatch) {
    return {
        gethashtag: () => dispatch(Common.GET_HASHTAG()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
