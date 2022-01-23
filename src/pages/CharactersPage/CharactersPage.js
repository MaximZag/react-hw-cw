import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {axiosService} from "../../services/axios.service";
import Character from "../../components/Character/Character";

const CharactersPage = () => {

    const {state} = useLocation()
    console.log(state)
    let characters = []

    for (const stateElement of state) {
        axiosService.get(`${stateElement}`).then(value => characters.push(value.data))
    }

    console.log(characters)

    return (
        <div>
            {characters && characters.map(character => console.log(character))}

        </div>
    );
};

export {CharactersPage};