import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentService} from "../../services/comment.service";

const CommentsPage = () => {

    const {id} = useParams()
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getById(id).then(value => setComments([...value]))
    }, [id])

    return (
        <div className={'userposts'}>
            {comments.map(comment => <div key={comment.id}>Name:{comment.name}- Email:{comment.email}-{comment.body}
                <hr/>
            </div>)}
        </div>
    );
};

export {CommentsPage};