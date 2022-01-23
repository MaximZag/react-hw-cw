import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import './EpisodesPage.css';
import Episode from "../../components/Episode/Episode";


const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState({})

    useEffect(() => {
        episodeService.getAll().then(value => setEpisodes({...value}))
    }, [])

console.log(episodes.results)
console.log(episodes.info)
    return (
        <div className={'main'}>
            <div className={'users'}>
                {/*{episodes.results.map(episode => <Episode epis={episode}/>)}*/}
                {/*{episodes.results[0]}*/}
            </div>
            {/*<div className={'outlet'}>*/}
            {/*    <Outlet/>*/}
            {/*</div>*/}
        </div>
    );
};

export {EpisodesPage};