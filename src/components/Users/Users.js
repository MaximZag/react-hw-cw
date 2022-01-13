import React, {useEffect, useState} from 'react';

import User from "../User/User";
import Posts from "../Posts/Posts";
import './Users.css'
import Userdetail from "../Userdetail/Userdetail";

const Users = () => {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    const chooseUser = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => setUser(value))
    }

    const showPosts = (postid) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => setPosts(posts.filter(post => post.userId === postid)))
    }

    return (
        <div>
            <div className={'main'}>
                <div className={'users'}>
                    {users.map(value => <User key={value.id} id={value.id} name={value.name} email={value.email}
                                              chooseUser={chooseUser}/>)}
                </div>
                <div className={'details'}>
                    {user && <Userdetail user={user} showPosts={showPosts}/>}
                </div>
            </div>
            <div className={'posts'}>
                {posts && posts.map(value => <Posts key={value.id} id={value.id} title={value.title}
                                                    body={value.body}/>)}
            </div>
        </div>
    );
};

export default Users;