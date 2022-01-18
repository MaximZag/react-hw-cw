import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams, Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";

const UserDetails = () => {
    const {id} = useParams()
    const [userDetails, setUserDetails] = useState(null);
    const {state} = useLocation()

    useEffect(() => {
        if (state) {
            setUserDetails(state)
            return
        }
        userService.getById(id).then(value => setUserDetails(value))
    }, [id])


    return (
        <div>
            {userDetails && (
                <div>
                    <div>{userDetails.name}</div>
                    <div>{userDetails.username}</div>
                    <div>{userDetails.email}</div>
                    <div>{userDetails.address.street}</div>
                    <Link to={'posts'}>
                        <button>UserPosts</button>
                    </Link>
                </div>

            )}
            <Outlet/>
        </div>
    );
};

export default UserDetails;