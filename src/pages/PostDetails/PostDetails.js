import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";

const PostDetails = () => {
    const {id} = useParams()
    const [postDetails, setPostDetails] = useState(null);
    const {state} = useLocation()

    useEffect(() => {
        if (state) {
            setPostDetails(state)
            return
        }
        postService.getById(id).then(value => setPostDetails(value))
    }, [id])


    return (
        <div>
            {postDetails && (
                <div className={'userdetails'}>
                    <div>{postDetails.id}</div>
                    <div>Title:{postDetails.title}</div>
                    <div>{postDetails.body}</div>
                    <Link to={'comments'}>
                        <button>Comments</button>
                    </Link>
                </div>

            )}
            <Outlet/>
        </div>
    );
};

export default PostDetails;