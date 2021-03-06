import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '80053bce-5c0b-43d1-a8d8-e6660e009434'
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        debugger;
        return instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`);
    }
}

export const authAPI = {
    getAuthUserData() {
        return instance.get(`auth/me`);
    },
    loginUser({email, password, rememberMe, captcha}) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logoutUser() {
        return instance.delete(`auth/login`);
    }
}

export const profileAPI = {
    getUserProfileData(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status});
    },
    updatePhoto(photo) {
        var formData = new FormData;
        formData.append("image", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    },
    updateProfile(profile) {
        return instance.put(`profile`, profile);
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`);
    }
}