import { securityAPI } from "../api/api";

const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    url: null
}

const securityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.url,
            }
        default:
            return state;
    }
}

export const setCaptchaUrl = (url) => {
    return {
        type: SET_CAPTCHA_URL, url
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptcha();
        dispatch(setCaptchaUrl(response.data));
    }
}
export default securityReducer;