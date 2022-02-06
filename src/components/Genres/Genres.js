import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../store/movie.slice";
import Genre from "../Genre/Genre";
import './Genres.css'

const Genres = () => {
    const {genres, movies} = useSelector(state => state['movieReducer'])
    const dispatch = useDispatch()

    // const{genres_ids}=movies
movies.map(movie=>console.log(movie.genre_ids))
    useEffect(() => {
        dispatch(getGenres())
    }, [])

    return (
        <div className={'genres'}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;