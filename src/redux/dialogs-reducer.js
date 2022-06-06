const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Robert Lane' },
        { id: 2, name: 'Peter Lyons' },
        { id: 3, name: 'Alice Woods' },
        { id: 4, name: 'Edward Scott' },
        { id: 5, name: 'Susan Richardson' },
        { id: 6, name: 'Mary Rice' },
        { id: 7, name: 'Thomas Hill' },
        { id: 8, name: 'Chris Parks' },
        { id: 9, name: 'Emily Stafford' },
        { id: 10, name: 'Linda Simmons' }
    ],
    messagesData: [
        { id: 1, message: 'hi!' },
        { id: 2, message: 'how are you?' },
        { id: 3, message: 'yo' },
        { id: 4, message: 'sho kak ono?' },
        { id: 5, message: 'sunny day' },
        { id: 6, message: 'hey' },
        { id: 7, message: 'lorem ipsum' },
        { id: 8, message: 'yo yo yo' },
        { id: 8, message: 'qwe' },
        { id: 8, message: 'check your mail' },
        { id: 8, message: 'are you busy?' }
    ],
    newMessageText: 'Write a message...'
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch(action.type) {
        case SEND_MESSAGE:
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push({
                id: 5,
                message: state.newMessageText
            })
            stateCopy.newMessageText = '';
            return stateCopy;

        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.messageText;
            return stateCopy;

        default:
            return state;
    }
}
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        messageText: text
    }
}
export default dialogsReducer;