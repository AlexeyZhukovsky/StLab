import React from 'react';
import {Link} from 'react-router-dom';

import 'filmInfoPage/styles/commentItem';



const CommentItem = ({userName, date, commentText}) => {
    return (
        <div className="commentItem">
            <div className="commentItem__info">
                <p>{userName}</p>
                <p>{date}</p>
            </div>
            <div className="commentItem__text">
                {commentText}
            </div>   
        </div>
    );
};

export default CommentItem;