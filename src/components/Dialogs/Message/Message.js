import classes from './Message.module.css';

function Message(props) {
    return (
        <div className={classes.message}>{props.message}</div>
    );
}

export default Message;