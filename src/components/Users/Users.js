import React from 'react';

import User from "../User/User";

const Users = ({users}) => {

    return (
        <div>
            {users.map(user => <User key={user.id} id={user.id} name={user.name} username={user.username}
                                     email={user.email}/>)}
        </div>
    );
};

export default Users;