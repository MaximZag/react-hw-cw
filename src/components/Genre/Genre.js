import React from 'react';

const Genre = ({genre:{id, name}}) => {
    return (
        <div>
            <button>{name}</button>
        </div>
    );
};

export default Genre;