import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../services/movies.service";

export const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page, id}, {dispatch}) => {
        try {
            const movies = await moviesService.getAllMovies(page, id)
            dispatch(getAllMovies({movies}))
        } catch (e) {
            console.log(e.message)
        }
    }
)

export const getGenres = createAsyncThunk(
    'movieSlice/getGenres',
    async (_, {dispatch}) => {
        try {
            const genres = await moviesService.getAllGenres()
            dispatch(getAllGenres({genres}))
        } catch (e) {
            console.log(e.message)
        }
    }
)

export const getOneMovie = createAsyncThunk(
    'movieSlice/getOneMovie',
    async ({id}, {dispatch}) => {
        try {
            const movie = await moviesService.getOneMovie(id)
            dispatch(uniqMovie({movie}))
        } catch (e) {
            console.log(e.message)
        }
    }
)

const movieSlice = createSlice(
    {
        name: 'movieSlice',
        initialState: {
            movies: [],
            pageId: {page: 1, id: '', total: 1},
            genres: [],
            uniqmovie: {}
        },
        reducers: {
            getAllMovies: (state, action) => {
                state.movies = [...action.payload.movies.results]
                state.pageId = {...state.pageId, total: action.payload.movies.total_pages}
            },
            getAllGenres: (state, action) => {
                state.genres = [...action.payload.genres.genres]
            },
            uniqMovie: (state, action) => {
                state.uniqmovie = {...action.payload.movie}
            },
            pagination: (state, action) => {
                state.pageId = {...action.payload}
            }
        }
    }
)

const movieReducer = movieSlice.reducer;
export const {getAllMovies, getAllGenres, uniqMovie, pagination} = movieSlice.actions

export default movieReducer