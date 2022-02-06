import React from 'react';
import {useDispatch} from "react-redux";
import {filterGenres} from "../../store/movie.slice";

const Genre = ({genre:{id, name}}) => {
    const dispatch=useDispatch()
    return (
        <div>
            <button onClick={()=>dispatch(filterGenres(id))}>{name}</button>
        </div>
    );
};

export default Genre;