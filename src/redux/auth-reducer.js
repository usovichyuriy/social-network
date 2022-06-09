import { authAPI } from "../api/api";
import { getCaptchaUrl, setCaptchaUrl } from "./security-reducer";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA, data: { userId, email, login, isAuth }
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
        }
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        let response = await authAPI.logoutUser()
        if (response.data.resultCode === 0) {
            dispatch(setCaptchaUrl({url: null}));
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}
export default authReducer;