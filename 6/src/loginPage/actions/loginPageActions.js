import {SET_USER} from 'loginPage/actions/loginPageActionsTypes';

export function setUser(value){
    return{
        type: SET_USER,
        payload: value
    }
}

