import React from 'react';
import {Link} from "react-router-dom";

import './Episode.css'

const Episode = ({epis}) => {
    const {id, name, air_date, episode, characters} = epis

    return (
        <div>
            <div> {id}    </div>
            <div> {name}    </div>
            <div> {air_date}    </div>
            <div> {episode}    </div>
            <Link to={`/character`} state={characters}>
                <button>Show Albums</button>
            </Link>
        </div>
    );
};

export default Episode;