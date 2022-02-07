import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getMovies, pagination} from "../../store/movie.slice";
import Movie from "../../components/Movie/Movie";
import Genres from "../../components/Genres/Genres";
import './MoviesPage.css'
import {useForm} from "react-hook-form";

const MoviesPage = () => {
    const {movies, pageId} = useSelector(state => state['movieReducer'])
    const dispatch = useDispatch()
    const {register, handleSubmit, reset} = useForm()

    useEffect(() => {
        dispatch(getMovies(pageId))
    }, [])

    const paginationFunc = (pageId, key) => {
        let i = pageId.page

        if (key === '+' && i !== pageId.total) {
            i++
            console.log({...pageId, page: i})
            dispatch(getMovies({...pageId, page: i}))
            dispatch(pagination({...pageId, page: i}))
        } else if (key === '-' && i !== 1) {
            i--
            console.log({...pageId, page: i})
            dispatch(getMovies({...pageId, page: i}))
            dispatch(pagination({...pageId, page: i}))
        }
    }
    const submit = (data) => {
        console.log(data)
        dispatch(getMovies({...pageId, page: data.page}))
        dispatch(pagination({...pageId, page: data.page}))
        reset()
    }

    return (
        <div>
            <Genres/>
            <div className={'movies'}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <button className={'pagin'} onClick={() => paginationFunc(pageId, '-')}>Previous</button>
            <button className={'pagin'} onClick={() => paginationFunc(pageId, '+')}>Next</button>
            <div>Page:{pageId.page}</div>
            <div>Total pages:{pageId.total}</div>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <label>Go to Page<input type="number" {...register('page')}/></label>
                    <button>GotoPage</button>


                </form>
            </div>
        </div>
    );
};

export default MoviesPage;