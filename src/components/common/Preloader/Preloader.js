import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import classes from './Preloader.module.css'

function Preloader(props) {
    return (
        <div className={classes.preloader}>
            <CircularProgress size={200} />
        </div>
    )
}
export default Preloader;