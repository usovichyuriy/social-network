import React, { useState } from 'react';
import classes from './ProfileInformation.module.css';
import { Avatar } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import Preloader from '../../common/Preloader/Preloader';
import ProfileData from './ProfileData';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import ProfileDataForm from './ProfileDataForm';


function ProfileInformation(props) {

    let [editMode, setEditMode] = useState(false);

    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
    }

    const Input = styled('input')({
        display: 'none',
    });

    let onMainPhotoChanged = (event) => {
        if (event.target.files.length) {
            props.updatePhoto(event.target.files[0]);
        }
    }

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.profileInformation}>
            <div className={classes.profileDescription}>
                <div className={classes.userAvatar} >
                    {props.profile.photos.small != null ?
                        <Avatar src={props.profile.photos.large} sx={{ width: 150, height: 150 }} /> :
                        <Avatar sx={{ bgcolor: deepPurple[500], width: 150, height: 150, fontsize: 20 }}>
                            {props.profile.fullName.charAt(0).toUpperCase()}</Avatar>}
                    <div className={classes.changePhotoButton}>
                        {!props.isOwner &&
                            <label htmlFor="icon-button-file">
                                <Input accept="image/*" id="icon-button-file" type="file" onChange={onMainPhotoChanged} />
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>}
                    </div>
                </div>
                <div>
                    {editMode ? 
                        <ProfileDataForm profile={props.profile} 
                                         status={props.status}
                                         deactivateEditMode={deactivateEditMode}
                                         updateProfile={props.updateProfile} /> : 
                        <ProfileData profile={props.profile} 
                                     status={props.status} 
                                     isOwner={props.isOwner} 
                                     activateEditMode={activateEditMode} />}
                </div>

            </div>
        </div>

    );
}
export default ProfileInformation;