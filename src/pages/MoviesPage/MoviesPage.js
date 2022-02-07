import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies, pagination} from "../../store/movie.slice";
import Movie from "../../components/Movie/Movie";
import Genres from "../../components/Genres/Genres";
import './MoviesPage.css'

const MoviesPage = () => {
    const {movies,pageId}=useSelector(state => state['movieReducer'])
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getMovies(pageId))
    },[])

    const pagination = (pageId) => {
      let i=pageId.page
        i++
        console.log({...pageId, page:i})
        dispatch(getMovies({...pageId, page:i}))
        // dispatch(pagination({...pageId, page:i}))
    }

    return (
        <div>
            <Genres/>
            <div className={'movies'}>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
            </div>
            {/*<button onClick={()=>dispatch()}>Previous</button>*/}
            <button className={'pagin'} onClick={()=>pagination(pageId)}>Next</button>
        </div>
    );
};

export default MoviesPage;