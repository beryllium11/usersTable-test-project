import React, { useState, useEffect } from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Users from "./Users";
import {getUsersTC, selectedUserTC, modalHandlerTC} from '../redux/UsersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentUser: state.usersPage.currentUser,
        isModalOpened: state.usersPage.isModalOpened
    }
};


class UsersApiComponent extends React.PureComponent {
    componentDidMount() {
       this.props.getUsers();
    }
    render() {
        return (
            <Users users={this.props.users}
                   isModalOpened={this.props.isModalOpened}
                   modalHandler={this.props.modalHandler}
                   currentUser={this.props.currentUser}
                   selectUser={this.props.selectUser}/>
        )
    }
}

export default compose(
    connect(mapStateToProps, {getUsers: getUsersTC, selectUser: selectedUserTC, modalHandler: modalHandlerTC})
)(UsersApiComponent);
