import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {getOneMovie} from "../../store/movie.slice";

const ActorMovie = ({movie: {poster_path, title, release_date, id}}) => {
    const dispatch = useDispatch()

    return (
        <div>
            <Link to={'/movie'}>
                <div className={'card'} onClick={() => dispatch(getOneMovie({id}))}>
                    <div>{title}</div>
                    <img src={`https://image.tmdb.org/t/p/w200${poster_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                         alt=""/>
                    <div>{release_date}</div>
                </div>
            </Link>
        </div>
    );
};

export default ActorMovie;