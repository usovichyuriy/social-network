import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import React from 'react';
import DialogsForm from './DialogsForm/DialogsForm';

function Dialogs(props) {

    let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => {
        return (
            <DialogItem name={dialog.name}
                        id={dialog.id}
                        userAvatar={dialog.userAvatar} />
        )
    });

    let messagesElements = props.dialogsPage.messagesData.map((message) => {
        return <Message message={message.message} />
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.messagesWrapper}>
                    {messagesElements}
                </div>
                <DialogsForm sendMessage={props.sendMessage}
                             updateNewMessageText={props.updateNewMessageText} />
            </div>
        </div>
    );
}
export default Dialogs;