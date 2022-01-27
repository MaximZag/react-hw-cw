import React from 'react';

const Cat = ({value}) => {
    return (
        <div>
            {value}
            <button>Delete</button>
        </div>
    );
};

export default Cat;