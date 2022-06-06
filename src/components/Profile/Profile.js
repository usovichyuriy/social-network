import classes from './Profile.module.css';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
    
    return (
        <div className={classes.content}>
            <ProfileInformation profile={props.profile} 
                                status={props.status} 
                                updateStatus={props.updateStatus}
                                isOwner={props.isOwner}
                                updatePhoto={props.updatePhoto}
                                updateProfile={props.updateProfile} />
            <MyPostsContainer />
        </div>
    );
}
export default Profile;