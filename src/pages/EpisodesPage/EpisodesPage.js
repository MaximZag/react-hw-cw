import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import {episodeService} from "../../services/episode.service";
import './EpisodesPage.css';
import Episode from "../../components/Episode/Episode";
import {axiosService} from "../../services/axios.service";


const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState({info: {}, results: []})

    let link = 'https://rickandmortyapi.com/api/episode'

    useEffect(() => {
        // episodeService.getAll().then(value => setEpisodes({...value}))
        axiosService(`${link}`).then(value => setEpisodes({...value.data}))
        console.log('request')
    }, [link])

    const pagination=(value)=>{
        if(link==='https://rickandmortyapi.com/api/episode'){
            link=value
            console.log(link)
            return link
        }
    }
console.log(link)

    return (
        <div>
            <div className={'episodepage'}>
                {episodes.results.map(episode => <div key={episode.id} className={'oneepisode'}><Episode
                    epis={episode}/>
                </div>)}
            </div>
            <div className={'buttons'}>
                    <button>Prev</button>
                    <button onClick={()=>pagination(episodes.info.next)}>Next</button>
            </div>
        </div>
    );
};

export {EpisodesPage};