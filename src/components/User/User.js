import React from 'react';
import {Link} from "react-router-dom";

import './User.css'

const User = ({user}) => {
    const {id, name, username} = user
    return (
        <div>
            <Link to={id.toString()} state={user} className={'link'}> {id}--{name}-{username}     </Link>
            <Link to={`${id}/albums`}>
                <button>Show Albums</button>
            </Link>
        </div>
    );
};

export default User;