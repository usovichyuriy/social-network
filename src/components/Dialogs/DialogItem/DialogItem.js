import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

function DialogItem(props) {
    return (
    <div className={classes.dialog}>
        <Avatar sx={ {bgcolor: deepOrange[500], width: 50, height: 50} }>{props.name.charAt(0).toUpperCase()}</Avatar>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
    );
}
export default DialogItem;