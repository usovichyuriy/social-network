import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getUserProfileData, requestStatus, updateStatus, updatePhoto, updateProfile } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter';
import { getProfile, getStatus } from '../../redux/profile-selectors';
import { getIsAuth, getUserId } from '../../redux/auth-selectors';

const ProfileContainer = (props) => {
    useEffect(() => {
        let userId = props.router.params.userId
        if (!userId) {
            userId = props.authorizedUserId;
            if(!userId){
                props.history.push("/login");
            }
        }
        props.getUserProfileData(userId);
        props.requestStatus(userId);
    }, []);

    return (
        <div>
            <Profile {...props} profile={props.profile}
                                isOwner={props.router.params.userId}
                                status={props.status}
                                updateStatus={props.updateStatus}
                                updatePhoto={props.updatePhoto}
                                updateProfile={props.updateProfile} />
        </div>
    );
}

let mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId: getUserId(state),
    isAuth: getIsAuth(state)
})
export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfileData, requestStatus, updateStatus, updatePhoto, updateProfile }),
    withRouter,
    withAuthRedirect)(ProfileContainer);