import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SET_PHOTO = 'SET-PHOTO';
const SAVE_PROFILE = 'SAVE-PROFILE';


let initialState = {
    postsData: [
        { id: 1, message: "Hello world!", likesCount: 17 },
        { id: 2, message: "Hi! That is my first post.", likesCount: 23 },
        { id: 3, message: "Great day!", likesCount: 17 },
        { id: 4, message: "Blablabla", likesCount: 11 }
    ],
    newPostText: 'Say something...',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case ADD_POST:
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push({
                id: 5,
                message: state.newPostText,
                likesCount: 0
            })
            stateCopy.newPostText = '';
            return stateCopy;

        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.postText;
            return stateCopy;
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        case SET_STATUS:
            return { ...state, status: action.status };
        case SET_PHOTO:
            return { ...state, profile: {...state.profile, photos: action.photos}};
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        postText: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
}

export const setPhoto = (photos) => {
    return {
        type: SET_PHOTO, photos
    }
}

export const saveProfile = (profile) => {
    return {
        type: SAVE_PROFILE, profile
    }
}

export const getUserProfileData = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getUserProfileData(userId);
        dispatch(setUserProfile(response.data));
    }
}

export const requestStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const updatePhoto = (photo) => {
    return async (dispatch) => {
        let response = await profileAPI.updatePhoto(photo);
        if (response.resultCode === 0) {
            dispatch(setPhoto(response.data.photos));
        }
    }
}

export const updateProfile = (profile) => {
    return async (dispatch) => {
        let response = await profileAPI.updateProfile(profile);
        console.log(response.data.resultCode);
        if (response.data.resultCode === 0) {
            dispatch(saveProfile(response.data));
        }
    }
}
export default profileReducer;