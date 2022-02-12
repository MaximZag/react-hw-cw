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

export const getOneActor = createAsyncThunk(
    'movieSlice/getOneActor',
    async ({id}, {dispatch}) => {
        try {
            const actor = await moviesService.getOneActor(id)
            dispatch(uniqActor({actor}))
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
            pageId: {page: 1, id: '', name: 'All Movies', total: 1},
            genres: [],
            uniqmovie: {},
            uniqactor: {},
            last: []
        },
        reducers: {
            getAllMovies: (state, action) => {
                state.movies = [...action.payload.movies.results]
                if (action.payload.movies.total_pages >= 500) {
                    state.pageId = {...state.pageId, total: 500}
                } else {
                    state.pageId = {...state.pageId, total: action.payload.movies.total_pages}
                }
            },
            getAllGenres: (state, action) => {
                state.genres = [...action.payload.genres.genres]
            },
            uniqMovie: (state, action) => {
                state.uniqmovie = {...action.payload.movie}
            },
            pagination: (state, action) => {
                state.pageId = {...action.payload}
            },
            uniqActor: (state, action) => {
                state.uniqactor = {...action.payload.actor}
            },
            last5: (state, action) => {
                if (state.last.length < 1) {
                    state.last.push(action.payload.movie)
                } else {
                    state.last = state.last.filter(item => item.id !== action.payload.movie.id)
                    state.last.push(action.payload.movie)
                }
                if (state.last.length > 8) {
                    state.last.shift()
                }


            }
        }
    }
)

const movieReducer = movieSlice.reducer;
export const {getAllMovies, getAllGenres, uniqMovie, pagination, uniqActor, last5} = movieSlice.actions

export default movieReducer