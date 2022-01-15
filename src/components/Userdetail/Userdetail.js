import React from 'react';

import './Userdetails.css'

const Userdetail = ({user, showPosts}) => {

    const {id, name, username, email, address:{street, city}, phone} = user

    return (
        <div>
            <div className={'maindet'}>
                <div className={'userdetails'}>
                    <div>{id}</div>
                    <div>{name}</div>
                    <div>{username}</div>
                    <div>{email}</div>
                    <div>{street}</div>
                    <div>{city}</div>
                    <div>{phone}</div>
                </div>

                <button onClick={() => showPosts(user.id)}>Show posts</button>

            </div>
        </div>
    );
};

export default Userdetail;