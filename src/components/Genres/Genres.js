import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGenres, refreshMovies} from "../../store/movie.slice";
import Genre from "../Genre/Genre";
import './Genres.css'

const Genres = () => {
    const {genres} = useSelector(state => state['movieReducer'])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    return (
        <div className={'genres'}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            <button onClick={()=>dispatch(refreshMovies())}>All</button>
        </div>
    );
};

export default Genres;