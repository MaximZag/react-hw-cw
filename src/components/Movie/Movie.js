import React from 'react';
import {useDispatch} from "react-redux";
import {getOneMovie} from '../../store/movie.slice'
import {Link} from "react-router-dom";
import './Movie.css'

const Movie = ({movie: {id, original_title, popularity, poster_path}}) => {

    const dispatch = useDispatch()
    return (
        <Link to={'/movie'}>
            <div className={'card'} onClick={() => dispatch(getOneMovie({id}))}>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                     alt=""/>
                <div className={'title'}>{original_title}</div>
                <div>Rating:{popularity}</div>
            </div>
        </Link>
    );
};

export default Movie;