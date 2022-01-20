import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album}) => {
    const {id, title} = album

    return (
        <div>
            <Link to={`${id.toString()}/photos`}>{id}--{title}</Link>
        </div>
    );
};

export default Album;