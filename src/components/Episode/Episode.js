import React from 'react';
// import {Link} from "react-router-dom";

import './Episode.css'

const Episode = ({epis}) => {
    const {results:{id, air_date, episode}} = epis
    return (
        <div>
            <div> {id}--{air_date}-{episode}     </div>
            {/*<Link to={`${id}/albums`}>*/}
            {/*    <button>Show Albums</button>*/}
            {/*</Link>*/}
        </div>
    );
};

export default Episode;