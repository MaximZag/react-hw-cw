import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies, getMoviesByGenre, pagination} from "../../store/movie.slice";

const Genre = ({genre:{id, name}}) => {
    const{pageId}=useSelector(state => state['movieReducer'])
    const dispatch=useDispatch()

    const genreFunction = (pageId) => {
        dispatch(getMovies({...pageId, page:1,id:id}))
        dispatch(pagination({...pageId, page:1,id:id}))
    }

    return (
        <div>
            <button onClick={()=>genreFunction(pageId)}>{name}</button>
        </div>
    );
};

export default Genre;