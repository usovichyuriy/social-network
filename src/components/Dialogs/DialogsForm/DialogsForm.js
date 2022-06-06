import React from "react";
import { Formik, Form, Field } from "formik";
import classes from './DialogsForm.module.css';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function DialogsForm(props) {
    

    let onSubmit = (formData, { setSubmitting }) => {
        setTimeout(() => {
            props.updateNewMessageText(formData.newMessageText);
            props.sendMessage();
            formData.newMessageText = '';
            setSubmitting(false);
        }, 400)
    }

    return (
        <Formik initialValues={{ newMessageText: "" }} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
                <Form>
                    <div className={classes.dialogForm}>
                        <div className={classes.messageInput}>
                            <Field type={'text'} name={'newMessageText'} placeholder={'Write a message...'} />
                        </div>
                        <div className={classes.messageButton}>
                            <Button type={'submit'} disabled={isSubmitting}><SendIcon /></Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
export default DialogsForm;