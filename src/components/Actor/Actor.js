import React from 'react';

import './Actor.css'

const Actor = ({actor: {name, character, profile_path}}) => {

    return (
        <div className={'actorcard'}>
            <div>{name}</div>
            <img src={`https://image.tmdb.org/t/p/w200${profile_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                 alt=""/>
            <div>{character}</div>
        </div>
    );
};

export default Actor;