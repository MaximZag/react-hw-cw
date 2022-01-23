import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import './EpisodesPage.css';
import Episode from "../../components/Episode/Episode";


const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([])
console.log(episodes)
    useEffect(() => {
        episodeService.getAll().then(value => setEpisodes(value))
    }, [])

    return (
        <div className={'main'}>
            <div className={'users'}>
                {episodes.map(episode => <Episode key={episode.results.id} epis={episode}/>)}
            </div>
            <div className={'outlet'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {EpisodesPage};