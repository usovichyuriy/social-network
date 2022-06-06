import React from "react";
import classes from './Contact.module.css';

function Contact (props) {
    return (
        <div className={classes.contact}>
            <span>{props.contactTitle}:</span> {props.contactValue}
        </div>
    )
}
export default Contact;