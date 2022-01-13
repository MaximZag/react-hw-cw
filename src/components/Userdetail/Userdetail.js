import React from 'react';

import './Userdetails.css'

const Userdetail = ({user, showPosts}) => {

    return (
        <div>
            <div className={'maindet'}>
                {Object.keys(user).map(userx => {
                        if (typeof user[userx] !== "object") {
                            return <div key={userx} className={'userdetails'}>
                                {user[userx]}
                            </div>
                        }
                    }
                )}
                <button onClick={() => showPosts(user.id)}>Show posts</button>

            </div>
        </div>
    );
};

export default Userdetail;