import React from 'react';

const Posts = ({id, title, body}) => {

    return (
        <div>
            {id}--{title}--{body}
        </div>
    );
};

export default Posts;