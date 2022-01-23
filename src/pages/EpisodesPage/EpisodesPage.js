import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import './EpisodesPage.css';
import Episode from "../../components/Episode/Episode";


const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState({info:{},results:[]})

    useEffect(() => {
        episodeService.getAll().then(value => setEpisodes({...value}))
    }, [])


console.log(episodes.results[0])
console.log(episodes)
    return (
        <div className={'main'}>
            <div className={'users'}>
                {episodes.results.map(episode => <Episode key={episode.id} epis={episode}/>)}
            </div>
            <div className={'outlet'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {EpisodesPage};