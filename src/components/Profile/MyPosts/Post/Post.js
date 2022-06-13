import classes from './Post.module.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Avatar } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import Preloader from '../../../common/Preloader/Preloader';

function Post(props) {

    if(!props.profile) {
        return <Preloader />;
    }
    return (
        <div className={classes.items}>
            <div className={classes.item}>
                {props.profile.photos.small ?
                    <Avatar src={props.profile.photos.small} sx={{ bgcolor: deepOrange[500], width: 50, height: 50 }} /> :
                    <Avatar sx={{ bgcolor: deepOrange[500], width: 50, height: 50 }}>
                        {props.profile.fullName.charAt(0).toUpperCase()}
                    </Avatar>}
                <span>{props.message}</span>
            </div>
            <div className={classes.reactions}>
                <ThumbUpIcon /><span>{props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post;