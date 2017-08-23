import React from 'react';
import CommentItem from 'filmInfoPage/components/commentItem';

import 'filmInfoPage/styles/comments';

const Comments = ({d}) => {
    console.log("DDD",d)
    let comments;
    if(d !== undefined){
        comments = d.comments.map((comment, index) => {return (<CommentItem 
            key={index}
            userName={comment.userName}
            date={comment.date}
            commentText={comment.commentText}
           />
        )});
        console.log("aaaaaaaaaa",comments)
    }else{
        comments = "noooo";
    }
    
    return (
        <div className="comments"> {comments} </div>
    );
};

export default Comments;