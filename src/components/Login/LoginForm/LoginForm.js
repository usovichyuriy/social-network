import React from "react";
import classes from "./LoginForm.module.css";
import { useFormik } from "formik";
import { TextField, Button, Checkbox } from "@mui/material";


import loginFormSchema from "../../FormValidation/LoginFormSchema";

const LoginForm = (props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },

        validate: (formData) => {
            const errors = {};
            if (!formData.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
            ) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },

        validationSchema: loginFormSchema,

        onSubmit: (formData, { setSubmitting }) => {
            setTimeout(() => {
                props.loginUser(formData);
                setSubmitting(false);
            }, 400);
        },
    });

    return (
        <div className={classes.loginForm}>
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.loginFormEmail}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="e-mail"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </div>
                <div className={classes.loginFormPassword}>
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && (formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </div>
                <div className={classes.loginFormCheckbox}>
                    <Checkbox type={'checkbox'} name={'rememberMe'} onChange={formik.handleChange} />
                    <label htmlFor={'rememberMe'}> remember me </label>
                </div>
                <div className={classes.loginFormButton}>
                    <Button variant="contained" fullWidth type="submit">
                        Login
                    </Button>
                </div>
            </form>
        </div>
    )
}
export default LoginForm;