export default function filmListReducer(state = '', action){ 
    switch(action.type){
        case 'SEARCH_FILM':
            return action.payload;
        default:
            return state
    }
}



