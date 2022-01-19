import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import './UserPosts.css'
import {postService} from "../../services/post.service";

const UserPosts = () => {
    const {id} = useParams()
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByIdUserPosts(id).then(value => setPosts([...value]))
    }, [id])

    return (
        <div className={'userposts'}>
            {posts.map(post => <div key={post.id}>Title:{post.title} -- Body:{post.body}
                <hr/>
            </div>)}
        </div>
    );
};


export {UserPosts};