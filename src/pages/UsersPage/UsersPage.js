import React, {useEffect, useState} from 'react';
import User from "../../components/User/User";
import {userService} from "../../services/user.service";


const UsersPage = () => {

    const [users, setUsers]=useState([])

    useEffect(()=>{
        userService.getAll().then(value=>setUsers(value))
    },[])

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/> )}
        </div>
    );
};

export default UsersPage;