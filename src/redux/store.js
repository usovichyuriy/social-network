import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'James Brown', userAvatar: 'https://i.kym-cdn.com/entries/icons/mobile/000/031/015/cover5.jpg' },
                { id: 2, name: 'Nikole Alban', userAvatar: 'https://i.kym-cdn.com/entries/icons/mobile/000/031/015/cover5.jpg' },
                { id: 3, name: 'John Teano', userAvatar: 'https://i.kym-cdn.com/entries/icons/mobile/000/031/015/cover5.jpg' },
                { id: 4, name: 'Fred Chapman', userAvatar: 'https://i.kym-cdn.com/entries/icons/mobile/000/031/015/cover5.jpg' },
                { id: 5, name: 'Niandra Lades', userAvatar: 'https://i.kym-cdn.com/entries/icons/mobile/000/031/015/cover5.jpg' },
                { id: 6, name: 'Sveta Sergeeva', userAvatar: 'https://i.kym-cdn.com/entries/icons/mobile/000/031/015/cover5.jpg' }
            ],
            messagesData: [
                { id: 1, message: 'hi!' },
                { id: 2, message: 'how are you?' },
                { id: 3, message: 'yo' },
                { id: 4, message: 'yo' },
                { id: 5, message: 'yo' }
            ],
            newMessageText: 'hello message from state'
        },
        profilePage: {
            postsData: [
                { id: 1, message: "Hello! How are you?", likesCount: 17 },
                { id: 2, message: "Hi! That is my first post.", likesCount: 23 },
                { id: 3, message: "Blabla.", likesCount: 17 },
                { id: 4, message: "Gamardzhoba.", likesCount: 11 }
            ],
            newPostText: 'hello posts from state'
        },
        sidebar: {}
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed!');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}
export default store;