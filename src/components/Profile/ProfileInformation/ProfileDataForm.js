import React from "react";
import classes from './ProfileDataForm.module.css';
import { Button, Input, Checkbox } from "@mui/material";
import { useFormik } from "formik";

const ProfileDataForm = (props) => {

    const formik = useFormik({
        initialValues: {
            fullName: props.profile.fullName,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            aboutMe: props.profile.aboutMe
        },

        onSubmit: (formData, { setSubmitting }) => {
            setTimeout(() => {
                console.log(formData);
                props.updateProfile(formData);
                props.deactivateEditMode();
                setSubmitting(false)
            }, 400)
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className={classes.userProfileInformation}>
            <div className={classes.fullName}>
                Full Name:
                <Input
                    fullWidth
                    id="fullName"
                    name="fullName"
                    placeholder="Say something..."
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    autoComplete="off"
                />
                { }
            </div>
            <div className={classes.profileData}>
                <div className={classes.lookingForAJobDescription}>
                    About me:
                    <Input
                        fullWidth
                        id="aboutMe"
                        name="aboutMe"
                        placeholder="23 y.o. designer from San Francisco"
                        value={formik.values.aboutMe}
                        onChange={formik.handleChange}
                        autoComplete="off"
                    />
                </div>
                <div className={classes.lookingForAJob}>
                    Looking for a job:
                    <Checkbox type={'checkbox'}
                        name={'lookingForAJob'}
                        value={formik.values.lookingForAJob}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className={classes.lookingForAJobDescription}>
                    Skills:
                    <Input
                        fullWidth
                        id="lookingForAJobDescription"
                        name="lookingForAJobDescription"
                        placeholder="your skills"
                        value={formik.values.lookingForAJobDescription}
                        onChange={formik.handleChange}
                        autoComplete="off"
                    />
                </div>
                <div className={classes.contacts}>
                    Contacts: {Object.keys(props.profile.contacts).map(key => {
                        return (
                            <div className={classes.contact}>
                                {key + ' (link)'}:
                                <Input
                                    fullWidth
                                    id={key}
                                    name={'contacts.' + key}
                                    placeholder={key}
                                    value={props.profile.contacts[key]}
                                    onChange={formik.handleChange}
                                    autoComplete="off"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={classes.saveButton}>
                {!props.isOwner && <Button variant="outlined" type={'submit'}>Save changes</Button>}
            </div>
        </form>
    )
}
export default ProfileDataForm;