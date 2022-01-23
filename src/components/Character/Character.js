import React from 'react';

import './Character.css'

const Character = ({character}) => {
    const {name, status, gender, species, image} = character
    return (
        <div className={'character'}>
            <div><img src={image} alt={name}/></div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{gender}</div>
            <div>{species}</div>
        </div>
    );
};

export default Character;