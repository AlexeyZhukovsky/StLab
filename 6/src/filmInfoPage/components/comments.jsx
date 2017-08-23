import React from 'react';
import CommentItem from 'filmInfoPage/components/commentItem';

import 'filmInfoPage/styles/comments';

const Comments = ({d}) => {
    let comments;
    if(d !== undefined){
        comments = d.comments.map((comment, index) => {return (<CommentItem 
            key={index}
            userName={comment.userName}
            date={comment.date}
            commentText={comment.commentText}
           />
        )});
    }else{
        comments = 'No comments';
    }
    
    return (
        <div className="comments"> {comments} </div>
    );
};

export default Comments;