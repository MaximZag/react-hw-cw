import React from 'react';

const Dog = ({value}) => {
    return (
        <div>
            {value}
            <button>Delete</button>
        </div>
    );
};

export default Dog;