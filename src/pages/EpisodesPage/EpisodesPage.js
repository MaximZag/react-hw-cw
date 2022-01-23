import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";
import './EpisodesPage.css';
import Episode from "../../components/Episode/Episode";


const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState({info: {}, results: []})

    useEffect(() => {
        episodeService.getAll().then(value => setEpisodes({...value}))
    }, [])


    return (
        <div className={'episodepage'}>
            {episodes.results.map(episode => <div key={episode.id} className={'oneepisode'}><Episode epis={episode}/>
            </div>)}
        </div>
    );
};

export {EpisodesPage};