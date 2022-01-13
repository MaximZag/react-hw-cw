import React from 'react';

const User = ({id, name, email, chooseUser}) => {


    return (
        <div>
            {id}--{name}--{email}
            <button onClick={() => chooseUser(id)}>Details</button>
        </div>
    );
};

export default User;