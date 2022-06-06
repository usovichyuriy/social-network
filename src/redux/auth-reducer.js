import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGOUT_DATA = 'SET_LOGIN_DATA';

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
                ...action.data,
                isAuth: true
            }
        case SET_LOGOUT_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: false
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

export const setLogoutUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_LOGOUT_DATA, data: { userId, email, login, isAuth }
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

export const loginUser = ({ email, password }) => {
    return async (dispatch) => {
        let response = await authAPI.loginUser({ email, password })
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        let response = await authAPI.logoutUser()
        if (response.data.resultCode === 0) {
            dispatch(setLogoutUserData(null, null, null, false));
        }
    }
}
export default authReducer;