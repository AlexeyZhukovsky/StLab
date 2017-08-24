export function filmListReducer(state = '', action){ 
    switch(action.type){
        case 'SEARCH_FILM':
            return action.payload;
        default:
            return state
    }
}

export function filmsHasErrored(state = false, action) {
    switch (action.type) {
        case 'FILMS_HAS_ERRORED':
            return action.hasErrored;
 
        default:
            return state;
    }
}
 
export function filmsIsLoading(state = false, action) {
    switch (action.type) {
        case 'FILMS_IS_LOADING':
            return action.isLoading;
 
        default:
            return state;
    }
}
 
export function films(state = [], action) {
    switch (action.type) {
        case 'GET_FILMS_SUCCESS':
            return action.payload;
 
        default:
            return state;
    }
}


