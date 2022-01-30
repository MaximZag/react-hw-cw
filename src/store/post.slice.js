import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {userService} from "../services/user.service";

export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {dispatch}) => {
        try {
            const posts = await userService.getAllPosts()
            dispatch(getPosts({posts}))
        } catch (e) {
            console.log(e.message)
        }
    }
)

export const postSlice = createSlice(
    {
        name: 'postSlice',
        initialState: {posts: []},
        reducers: {
            getPosts: (state, action) => {
                state.posts = [...action.payload.posts]
            }
        }
    }
)

const postReducer = postSlice.reducer;
const {getPosts} = postSlice.actions

export default postReducer