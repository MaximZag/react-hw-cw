import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {userService} from "../services/user.service";

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {dispatch}) => {
        try {
            const comments = await userService.getAllComments()
            dispatch(getComments({comments}))
        } catch (e) {
            console.log(e.message)
        }
    }
)

export const commentSlice = createSlice(
    {
        name: 'commentSlice',
        initialState: {comments: []},
        reducers: {
            getComments: (state, action) => {
                state.comments = [...action.payload.comments]
            }
        }
    }
)

const commentReducer = commentSlice.reducer;
const {getComments} = commentSlice.actions

export default commentReducer