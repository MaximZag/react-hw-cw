import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/comment.slice";
import Comment from "../../components/Comment/Comment";

const CommentsPage = () => {
    const {comments} = useSelector(state => state['commentReducer'])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;