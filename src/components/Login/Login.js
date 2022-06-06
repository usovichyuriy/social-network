import React, { useEffect } from "react";
import { loginUser, getAuthUserData } from "../../redux/auth-reducer";
import { connect } from 'react-redux';
import LoginForm from "./LoginForm/LoginForm";
import classes from './Login.module.css';
import { Navigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Divider } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Login = (props) => {

    useEffect(() => {
        props.getAuthUserData();
    });

    if (props.auth.isAuth) {
        return (
            <Navigate to={'/profile'} />
        )
    }
    else {
        return (
            <div className={classes.loginBlock}>
                <h1>Login</h1>
                <LoginForm loginUser={props.loginUser} getAuthUserData={props.getAuthUserData} />
                <div className={classes.testAccountInformation}>
                    <Divider />
                    <h3>Test email and password:</h3>
                    <div className={classes.testEmail}>
                        <EmailIcon />
                        <span> free@samuraijs.com</span>
                        <CopyToClipboard text="free@samuraijs.com">
                            <Button><ContentCopyIcon sx={{width: 20, height: 20}} /></Button>
                        </CopyToClipboard>
                    </div>
                    <div className={classes.testPassword}>
                        <KeyIcon />
                        <span> free</span>
                        <CopyToClipboard text="free">
                            <Button><ContentCopyIcon sx={{width: 20, height: 20}} /></Button>
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
        )
    }
};

let mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { loginUser, getAuthUserData })(Login);