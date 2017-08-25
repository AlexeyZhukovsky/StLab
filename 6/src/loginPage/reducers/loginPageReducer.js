import {SET_USER} from 'loginPage/actions/loginPageActionsTypes';

const initialState = {
    users: [
        {login: 'Alex', password: '111'},
        {login: 'Fred', password: '222'},
        {login: 'Jon', password: '333'}    
    ],
    currentUser: {login: 'Alex', password: '111'},
};

export default function loginUser(state = initialState, action){
    switch (action.type){
        case 'ADD_DATA':
            return Object.assign({},state,{
                data: [...state.data, action.payload]
            });
        case SET_USER:
            return Object.assign({},state,{
                currentUser: action.payload
            });
            default:
                return state;
    }
}; 
