import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {userService} from "../services/user.service";

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {dispatch}) => {
        try {
            const users = await userService.getAllUsers()
            dispatch(getUsers({users}))
        } catch (e) {
            console.log(e.message)
        }
    }
)

export const userSlice = createSlice(
    {
        name: 'userSlice',
        initialState: {users: []},
        reducers: {
            getUsers: (state, action) => {
                state.users = [...action.payload.users]
            }
        }
    }
)

const userReducer = userSlice.reducer;
const {getUsers} = userSlice.actions

export default userReducer