import classes from './Post.module.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Preloader from '../../../common/Preloader/Preloader';

function Post(props) {
    
    return (
        <div className={classes.items}>
            <div className={classes.item}>
                {props.profile ? <img src={props.profile.photos.small} /> : <Preloader />}
                <span>{props.message}</span>
            </div>
            <div className={classes.reactions}>
                <ThumbUpIcon /><span>{props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post;