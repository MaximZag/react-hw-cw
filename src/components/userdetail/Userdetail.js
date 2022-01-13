import React from 'react';

const Userdetail = ({user, showPosts}) => {

    return (
        <div>
            <div>
                <h1>{user.id} : {user.name} - {user.username}</h1>
                <h2>{user.email}</h2>
                <h2>{user.address.street}</h2>
                <button onClick={() => showPosts(user.id)}>Show posts</button>

            </div>
        </div>
    );
};

export default Userdetail;