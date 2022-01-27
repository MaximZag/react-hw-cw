import React from 'react';

const Cat = ({value, deleter}) => {
    return (
        <div>
            {value}
            <button onClick={() => deleter(value, 'cat')}>Delete</button>
        </div>
    );
};

export default Cat;