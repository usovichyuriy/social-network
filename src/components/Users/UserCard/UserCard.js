import classes from './UserCard.module.css';
import { NavLink } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Button } from '@mui/material';

function UserCard(props) {
    return (
        <div className={classes.userCard}>
            <div className={classes.userBlock}>
                <div className={classes.avatar}>
                    <NavLink to={'/profile/' + props.id}>
                        {props.photoSmall != null ? 
                        <Avatar src={props.photoSmall} /> : 
                        <Avatar sx={ {bgcolor: deepOrange[500]} }>{props.fullName.charAt(0).toUpperCase()}</Avatar>}
                    </NavLink>
                </div>
                <div className={classes.userInformation}>
                    <div className={classes.mainInformation}>
                        <div className={classes.fullName}>{props.fullName}</div>
                        <div className={classes.status}>
                            {props.status}</div>
                    </div>
                    {/* <div className={classes.location}>
                        <div>{"props.country"}</div>
                        <div>{"props.city"}</div>
                    </div> */}
                </div>
                <div className={classes.button}>
                {props.followed
                        ? <Button disabled={props.requestInProgress} variant='contained' onClick={() => {
                            props.unfollowUser(props.id);
                        }}>Unfollow</Button>
                        : <Button disabled={props.requestInProgress} variant='contained' onClick={() => {
                            props.followUser(props.id);
                        }}>Follow</Button>}
                </div>
            </div>

        </div>
    )
}
export default UserCard;