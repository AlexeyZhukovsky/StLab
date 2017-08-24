export function search(data){
    return{
        type: 'SEARCH_FILM',
        payload: data
    }
}

export function filmsHasErrored(bool) {
    return {
        type: 'FILMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function filmsIsLoading(bool) {
    return {
        type: 'FILMS_IS_LOADING',
        isLoading: bool
    };
}

export function getFilmsSuccess(items) {
    return {
        type: 'GET_FILMS_SUCCESS',
        payload: items
    };
}

export function getFilms(url) {
    return(dispatch) => {
        dispatch(filmsIsLoading(true));

        fetch(url)
            .then((response) => {
                if(!response.ok){
                    throw Error(response.statusText);
                }

                dispatch(filmsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((data) => {return data.items})
            .then((items) => dispatch(getFilmsSuccess(items)))
            
    }
}
