import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_REQUEST_PROGRESS = 'TOGGLE_IS_REQUEST_PROGRESS';


let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    requestInProgress: false
}

const usersReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                })
            }
        case SET_USER:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_REQUEST_PROGRESS:
            return {
                ...state, requestInProgress: action.isFetching
            }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW, userId
    }
}

export const unfollow = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USER, users
    }
}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE, page
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT, totalUsersCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING, isFetching
    }
}

export const toggleRequestProgress = (isFetching) => {
    return {
        type: TOGGLE_IS_REQUEST_PROGRESS, isFetching
    }
}

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsersCount(response.data.totalCount));
    }
}

let followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleRequestProgress(true));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleRequestProgress(false));
}

export const followUser = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.followUser.bind(usersAPI);
        let actionCreator = follow;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}

export const unfollowUser = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollowUser.bind(usersAPI);
        let actionCreator = unfollow;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}
export default usersReducer;