import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {getMovies, pagination} from "../../store/movie.slice";
import Movie from "../../components/Movie/Movie";
import Genres from "../../components/Genres/Genres";
import './MoviesPage.css'

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

    useEffect(() => {
        const body = document.getElementById('scroll');
        body.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        })
    }, [pageId])


    return (
        <div className={'container'}>
            <div className={'header'}>
                <Genres/>
            </div>
            <div className={'name'}>{pageId.name.toUpperCase()}</div>
            <div className={'movies'} id={'scroll'}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={'footer'}>
                <button className={'pagin'} onClick={() => paginationFunc(pageId, '-')}>Previous</button>
                <div>Page:{pageId.page}</div>
                <button onClick={() => paginationFunc(pageId, '+')}>Next</button>
                <div className={'goto'}>
                    <form onSubmit={handleSubmit(submit)}>
                        <label><input type="number" {...register('page')}/></label>
                        <button>GotoPage</button>
                    </form>
                </div>
                <div>Total pages:{pageId.total}</div>
            </div>
        </div>
    );
};

export default MoviesPage;