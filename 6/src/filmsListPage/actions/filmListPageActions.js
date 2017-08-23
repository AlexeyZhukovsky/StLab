function search(data){
    return{
        type: 'SEARCH_FILM',
        payload: data
    }
}

export default search;