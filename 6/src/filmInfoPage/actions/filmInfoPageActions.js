export function addCommentAction(comment){
    return{
        type: 'ADD_COMMENT',
        payload: comment
    }
}

export function imagesHasErrored(bool) {
    return {
        type: 'IMAGES_HAS_ERRORED',
        hasErrored: bool
    };
}

export function imagesIsLoading(bool) {
    return {
        type: 'IMAGES_IS_LOADING',
        isLoading: bool
    };
}

export function getImagesSuccess(items) {
    return {
        type: 'GET_IMAGES_SUCCESS',
        payload: items
    };
}

export function getImages(url) {
    return(dispatch) => {
        dispatch(imagesIsLoading(true));

        fetch(url)
            .then((response) => {
                if(!response.ok){
                    throw Error(response.statusText);
                }

                dispatch(imagesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((data) => {return data.backdrops})                    // возможно не нужно!
            .then((items) => dispatch(getImagesSuccess(items)))
            
    }
}