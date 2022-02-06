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

const movieSlice = createSlice(
    {
        name: 'movieSlice',
        initialState: {
            movies: [],
            genres: []
        },
        reducers: {
            getAllMovies: (state, action) => {
                state.movies = [...action.payload.movies.results]
            },
            getAllGenres:(state,action)=>{
                state.genres=[...action.payload.genres.genres]
                console.log(state.genres)
            }
        }
    }
)

const movieReducer = movieSlice.reducer;
const {getAllMovies,getAllGenres} = movieSlice.actions

export default movieReducer