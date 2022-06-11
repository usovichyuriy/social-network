import { authAPI } from "../api/api";
import { getCaptchaUrl, setCaptchaUrl } from "./security-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errorMessage: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                ...action.errorMessage
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth, errorMessage) => {
    return {
        type: SET_USER_DATA, data: { userId, email, login, isAuth, errorMessage }
    }
}

export const setErrorMessage = (errorMessage) => {
    return {
        type: SET_ERROR_MESSAGE, errorMessage: { errorMessage }
    }
}

export const getAuthUserData = () => {
    return async (dispatch) => {
        let response = await authAPI.getAuthUserData();
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const loginUser = ({ email, password, rememberMe, captcha }) => {
    return async (dispatch) => {
        let response = await authAPI.loginUser({ email, password, rememberMe, captcha })
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
        else if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
            dispatch(setErrorMessage(response.data.messages));
        }
        else {
            dispatch(setErrorMessage(response.data.messages));
        }
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        let response = await authAPI.logoutUser()
        if (response.data.resultCode === 0) {
            dispatch(setCaptchaUrl({url: null}));
            dispatch(setAuthUserData(null, null, null, false, null));
        }
    }
}
export default authReducer;