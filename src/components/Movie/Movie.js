import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {getOneMovie, last5} from '../../store/movie.slice'
import './Movie.css'

const Movie = ({movie}) => {
    const {id, original_title, popularity, poster_path} = movie
    const dispatch = useDispatch()

    const dispatchactions = () => {
        dispatch(getOneMovie({id}))
        dispatch(last5({movie}))
    }
    return (
        <Link to={'/movie'}>
            <div className={'card'} onClick={() => dispatchactions(id, movie)}>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                     alt=""/>
                <div className={'title'}>{original_title}</div>
                <div>Rating:{popularity}</div>
            </div>
        </Link>
    );
};

export default Movie;