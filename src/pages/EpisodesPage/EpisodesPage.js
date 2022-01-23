import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import './EpisodesPage.css';
import Episode from "../../components/Episode/Episode";


const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState({info: {}, results: []})

    useEffect(() => {
        episodeService.getAll().then(value => setEpisodes({...value}))
    }, [])

    return (
        <div>
            <div className={'episodepage'}>
                {episodes.results.map(episode => <div key={episode.id} className={'oneepisode'}><Episode
                    epis={episode}/>
                </div>)}
            </div>
            <div className={'buttons'}>
                <Link to={`/${episodes.info.prev}`}>
                    <button>Prev</button>
                </Link>
                <Link to={`/${episodes.info.next}`}>
                    <button>Next</button>
                </Link>
            </div>
        </div>
    );
};

export {EpisodesPage};