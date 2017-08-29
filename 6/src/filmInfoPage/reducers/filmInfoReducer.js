import {
    ADD_COMMENT,
    IMAGES_HAS_ERRORED,
    IMAGES_IS_LOADING, 
    GET_IMAGES_SUCCESS,
    SET_FILM_RATING
} from 'filmInfoPage/actions/filmInfoPageActionsTypes';

const initialState = [
    {
        id: '284053',
        comments: [
            { 
                userName: 'Roma',
                date: '22/12/2019',
                commentText: 'film super!'  
            },
            { 
                userName: 'Andrey',
                date: '23/12/2019',
                commentText: 'mne ne zashlo(('  
            }
        ] 
    }
];

const initialRating= [
    {
        id: '284053',
        rating: [
            { 
                userName: 'Roma',
                stars: 5
                 
            },
            { 
                userName: 'Andrey',
                stars: 2
            }
        ] 
    }
];

export function filmInfoReducer(state = initialState, action){ 
    switch(action.type){
        case ADD_COMMENT:
            let findId = state.find(el => el.id == action.payload.id);
            let ind = state.findIndex(el => el.id == action.payload.id);
            if(findId !== undefined){
                let newState =  Object.assign({},state[ind], {comments:[...state[ind].comments, action.payload.comments[0]]});
                return state.map(a => {if(a.id = action.payload.id){return newState}else{return a}})
            }else{
                return [...state, action.payload]
            }
        default:
            return state
    }
}

export function setFilmRating(state = initialRating, action){
    switch(action.type){
        case SET_FILM_RATING:
            let findId = state.find(el => el.id == action.payload.id);
            let ind = state.findIndex(el => el.id == action.payload.id);
            if(findId !== undefined){
                let findUser = state[ind].rating.find(el => el.userName == action.payload.rating[0].userName);
                let userInd = state[ind].rating.findIndex(el => el.userName == action.payload.rating[0].userName);
                if(findUser !== undefined){
                    let newState =  Object.assign({},state[ind], {rating: Object.assign([],state[ind].rating,state[ind].rating[userInd] = action.payload.rating[0])});
                    return state.map(a => {if(a.id = action.payload.id){return newState}else{return a}})
                }else{
                    let newState =  Object.assign({},state[ind], {rating:[...state[ind].rating, action.payload.rating[0]]});
                    return state.map(a => {if(a.id = action.payload.id){return newState}else{return a}})
                }    
            }else{
                return [...state, action.payload]
            }
        default:
            return state
    }
}

export function imagesHasErrored(state = false, action) {
    switch (action.type) {
        case IMAGES_HAS_ERRORED:
            return action.hasErrored;
 
        default:
            return state;
    }
}
 
export function imagesIsLoading(state = false, action) {
    switch (action.type) {
        case IMAGES_IS_LOADING:
            return action.isLoading;
 
        default:
            return state;
    }
}
 
export function images(state = [], action) {
    switch (action.type) {
        case GET_IMAGES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

