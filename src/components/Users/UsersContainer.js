import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    setCurrentPage, setUsers,
    setTotalUsersCount, toggleIsFetching,
    toggleRequestProgress, requestUsers, followUser, unfollowUser
} from '../../redux/users-reducer';
import Users from './Users';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getCurrentPage, getIsFetching, getRequestInProgress, getTotalUsersCount } from '../../redux/users-selectors';



const UsersContainer = (props) => {
    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize);
    }, []);

    let onPageChanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize);
    }
    return (
        <div>
            <Users currentPage={props.currentPage}
                   pageSize={props.pageSize} 
                   onPageChanged={onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   users={props.users} 
                   requestInProgess={props.requestInProgess}
                   toggleRequestProgress={props.toggleRequestProgress}
                   followUser={props.followUser}
                   unfollowUser={props.unfollowUser}
                   isFetching={props.isFetching} />
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        requestInProgress: getRequestInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setUsers,
        setCurrentPage, setTotalUsersCount, toggleIsFetching,
        toggleRequestProgress, requestUsers, followUser, unfollowUser
    }),
    withAuthRedirect
)(UsersContainer);