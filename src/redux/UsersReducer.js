import {usersApi} from '../api/ApiUsers'
import {Action} from "redux";

const SET_USERS = 'SET_USERS';
const SELECTED_USER = 'SELECTED_USER';
const MODAL = 'MODAL'

const initialState = {
    users: [],
    currentUser: {
        UserName: '',
        FirstName: '',
        LastName: '',
        Emails: '',
        AddressInfo: '',
        Gender: '',
        Concurrency: ''
    },
    isModalOpened: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SELECTED_USER: {
            return {...state, currentUser: action.currentUser}
        }
        case MODAL: {
            return {...state, isModalOpened: action.isModalOpened}
        }
        default:
            return state;
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentUserAC = (currentUser) => ({type: SELECTED_USER, currentUser});
export const ModalHandlerAC = (isModalOpened) => ({type: MODAL, isModalOpened})

export const getUsersTC = () =>  {
    return  async (dispatch, getState) => {
            const data = await usersApi.getUsers();
            dispatch(setUsersAC(data.value));
    }
};
export const selectedUserTC = (userName, isModalOpened) =>  {
    return  async (dispatch, getState) => {
        const data = await usersApi.getCurrentUser(userName);
        dispatch(setCurrentUserAC(data));
        dispatch(ModalHandlerAC(isModalOpened));
    }
};
export const modalHandlerTC = (isModalOpened) =>  {
    return  async (dispatch, getState) => {
        dispatch(ModalHandlerAC(isModalOpened));
    }
}

export default usersReducer;
