import React from 'react';
import {Link} from "react-router-dom";

import './User.css'

const User = ({user}) => {
    const {id, name, username}=user
    return (
        <div>
            <Link to={id.toString()} state={user} className={'link'}> {id}--{name}-{username}</Link>
        </div>
    );
};

export default User;