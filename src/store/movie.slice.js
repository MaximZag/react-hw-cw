import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../services/movies.service";

export const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async (_, {dispatch}) => {
        try {
            const movies = await moviesService.getAllMovies()
            dispatch(getAllMovies({movies}))
            // console.log(movies.results)
        } catch (e) {
            console.log(e.message)
        }
    }
)

export const getGenres=createAsyncThunk(
    'movieSlice/getGenres',
    async (_,{dispatch})=>{
        try {
            const genres = await moviesService.getAllGenres()
            dispatch(getAllGenres({genres}))
        } catch (e) {
            console.log(e.message)
        }
    }
)

export const getOneMovie=createAsyncThunk(
    'movieSlice/getOneMovie',
    async ({id},{dispatch})=>{
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
            reservmovies:[],
            genres: [],
            uniqmovie: {}
        },
        reducers: {
            getAllMovies: (state, action) => {
                state.movies = [...action.payload.movies.results]
                state.reservmovies = [...action.payload.movies.results]

            },
            getAllGenres:(state,action)=>{
                state.genres=[...action.payload.genres.genres]
            },
            uniqMovie:(state,action)=>{
                state.uniqmovie={...action.payload.movie}
            },
            filterGenres:(state,action)=>{
                state.movies=[...state.reservmovies]
                state.movies=state.movies.filter(movie=>movie.genre_ids.includes(action.payload))
            },
            refreshMovies:(state)=>{
                state.movies=[...state.reservmovies]
            }
        }
    }
)

const movieReducer = movieSlice.reducer;
export const {getAllMovies,getAllGenres,uniqMovie, filterGenres,refreshMovies} = movieSlice.actions

export default movieReducer