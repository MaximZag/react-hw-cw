import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../store/movie.slice";
import Movie from "../../components/Movie/Movie";

const MoviesPage = () => {
    const {movies}=useSelector(state => state['movieReducer'])
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getMovies())
    },[])

    return (
        <div>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesPage;