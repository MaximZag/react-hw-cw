import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGenres, getMovies, pagination} from "../../store/movie.slice";
import Genre from "../Genre/Genre";
import './Genres.css'

const Genres = () => {
    const {genres,pageId} = useSelector(state => state['movieReducer'])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    const allFunc = (pageId) => {
        dispatch(getMovies({...pageId, page:1,id:''}))
        dispatch(pagination({...pageId, page:1,id:''}))
    }

    return (
        <div className={'genres'}>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            <button onClick={()=>allFunc(pageId)}>All</button>
        </div>
    );
};

export default Genres;