function addCommentAction(comment){
    return{
        type: 'ADD_COMMENT',
        payload: comment
    }
}

export default addCommentAction;