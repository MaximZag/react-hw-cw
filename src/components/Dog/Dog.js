import React from 'react';

const Dog = ({value, deleter}) => {
    return (
        <div>
            {value}
            <button onClick={()=>deleter(value,'dog')}>Delete</button>
        </div>
    );
};

export default Dog;