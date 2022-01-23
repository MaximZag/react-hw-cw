import React from 'react';
import {Link} from "react-router-dom";

import './Episode.css'

const Episode = ({epis}) => {
    const {id, name, air_date, episode, characters} = epis
console.log(characters)
    return (
        <div>
            <div> {id}    </div>
            <div> {name}    </div>
            <div> {air_date}    </div>
            <div> {episode}    </div>
            <Link to={`${id}/character`}>
                <button>Show Albums</button>
            </Link>
        </div>
    );
};

export default Episode;