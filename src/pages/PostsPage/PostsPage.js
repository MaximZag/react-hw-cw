import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value))
    }, [])

    return (
        <div className={'main'}>
            <div className={'users'}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div className={'outlet'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};