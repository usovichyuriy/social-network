import React from "react";
import { Button, Input } from "@mui/material";
import { useFormik } from "formik";
import classes from "./MyPostsForm.module.css";

function MyPostsForm(props) {

    const formik = useFormik({
        initialValues: {
            newPostText: ''
        },

        onSubmit: (formData, { setSubmitting }) => {
            setTimeout(() => {
                props.updateNewPostText(formData.newPostText);
                props.addPost();
                formik.values.newPostText = '';
                setSubmitting(false);
            }, 400)
        }
    });

    return (
        <div className={classes.myPostsForm}>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <Input
                        fullWidth
                        id="newPostText"
                        name="newPostText"
                        placeholder="Say something..."
                        value={formik.values.newPostText}
                        onChange={formik.handleChange}
                        autoComplete="off"
                    />
                </div>
                <div>
                    <Button variant="outlined" type={'submit'}>Add New Post</Button>
                </div>
            </form>
        </div>
    )
}
export default MyPostsForm;