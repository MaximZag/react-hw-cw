import React from 'react';

const Character = ({character}) => {
    const {name, status, gender, species, image} = character
    console.log(character)
    console.log(name)
    return (
        <div>
            <div><img src={image} alt={name}/></div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{gender}</div>
            <div>{species}</div>
        </div>
    );
};

export default Character;