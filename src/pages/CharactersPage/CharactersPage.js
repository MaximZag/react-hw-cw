import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {axiosService} from "../../services/axios.service";
import Character from "../../components/Character/Character";
import './CharactersPage.css'

const CharactersPage = () => {

    const {state} = useLocation()
    let array = []
    for (const element of state.characters) {
        array.push(element.replace('https://rickandmortyapi.com/api/character/', ''))
    }

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axiosService.get(`https://rickandmortyapi.com/api/character/${array}`).then(value => setCharacters(value.data))
    }, [array])


    return (
        <div>
            <div className={'name'}>
                <div>{state.name}</div>
                <div>{state.air_date}</div>
                <div>{state.episode}</div>
            </div>
            <div className={'main'}>
                {characters.map(character => <Character key={character.id} character={character}/>)}
            </div>
        </div>
    );
};

export {CharactersPage};