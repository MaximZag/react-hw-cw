import React, {useEffect, useState} from 'react';

import {episodeService} from "../../services/episode.service";
import './EpisodesPage.css';
import Episode from "../../components/Episode/Episode";
import {axiosService} from "../../services/axios.service";


const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState({info: {}, results: []})

    useEffect(() => {
        episodeService.getAll().then(value => setEpisodes({...value}))
    }, [])

    const pagination = (value) => {
        if (value !== null) {
            axiosService(`${value}`).then(value => setEpisodes({...value.data}))
        }
    }

    return (
        <div>
            <div className={'episodepage'}>
                {episodes.results.map(episode => <div key={episode.id} className={'oneepisode'}><Episode
                    epis={episode}/>
                </div>)}
            </div>
            <div className={'buttons'}>
                <button onClick={() => pagination(episodes.info.prev)}>Prev</button>
                <button onClick={() => pagination(episodes.info.next)}>Next</button>
            </div>
        </div>
    );
};

export {EpisodesPage};