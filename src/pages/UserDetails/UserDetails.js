import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams, Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import './UserDetails.css'

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
                <div className={'userdetails'}>
                    <div>{userDetails.name}</div>
                    <div>{userDetails.username}</div>
                    <div>{userDetails.email}</div>
                    <div>{userDetails.address.street}</div>
                    <div>{userDetails.address.city}</div>
                    <div>{userDetails.phone}</div>
                    <div>{userDetails.website}</div>
                    <div>{userDetails.company.name}</div>
                    <Link to={'posts'}>
                        <button>UserPosts</button>
                    </Link>
                </div>

            )}
            <Outlet/>
        </div>
    );
};

export {UserDetails};