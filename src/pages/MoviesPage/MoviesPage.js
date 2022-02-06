import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../store/movie.slice";
import Movie from "../../components/Movie/Movie";
import Genres from "../../components/Genres/Genres";
import './MoviesPage.css'

const MoviesPage = () => {
    const {movies}=useSelector(state => state['movieReducer'])
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getMovies())
    },[])

    return (
        <div>
            <Genres/>
            <div className={'movies'}>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
            </div>
            <button>Previous</button>
            <button>Next</button>
        </div>
    );
};

export default MoviesPage;