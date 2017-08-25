import {SET_USER} from 'loginPage/actions/loginPageActionsTypes';

export function addData(value){
    return{
        type: 'ADD_DATA',
        payload: value
    }
}

export function setUser(value){
    return{
        type: SET_USER,
        payload: value
    }
}

