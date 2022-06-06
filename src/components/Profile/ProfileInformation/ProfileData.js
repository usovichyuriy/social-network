import React from "react";
import Contact from "./Contact/Contact";
import ProfileStatus from './ProfileStatus';
import classes from './ProfileData.module.css';
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const ProfileData = (props) => {
    return (
        <div className={classes.dataBlock}>
            <div className={classes.userProfileInformation}>
                <div className={classes.fullName}>
                    {props.profile.fullName}
                </div>
                <div className={classes.status}>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />
                </div>
                <div className={classes.profileData}>
                    <div className={classes.aboutMe}>
                        <span>About me:</span> {props.profile.aboutMe}
                    </div>
                    <div className={classes.lookingForAJob}>
                        <span>Looking for a job:</span> {props.profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    <div className={classes.lookingForAJobDescription}>
                    {props.profile.lookingForAJob &&
                        <div className={classes.lookingForAJobDescription}>
                            <span>Skills:</span> {props.profile.lookingForAJobDescription}
                        </div>}
                    </div>
                    <div className={classes.contacts}>
                        <span>Contacts:</span> {Object.keys(props.profile.contacts).map(key => {
                            return <Contact key={key}
                                            contactTitle={key}
                                            contactValue={props.profile.contacts[key]} />
                        })}
                    </div>
                </div>
            </div>
            <div>
                {!props.isOwner && <Button onClick={props.activateEditMode}><EditIcon /></Button>}
            </div>
        </div>
    )
}
export default ProfileData;