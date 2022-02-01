import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice(
    {
        name: 'todoSlice',
        initialState: {
            todo: [],
            all: 0,
            complete: 0
        },
        reducers: {
            addToDo: (state, action) => {
                state.todo.push({id: new Date().getTime(), ...action.payload.data})
            },
            deleteToDo: (state, action) => {
                state.todo = state.todo.filter(task => task.id !== action.payload.id)
            },
            allCounter: (state, action) => {
                state.all = state.all + action.payload
            },
            completeCounter: (state, action) => {
                if (state.complete === 0 && action.payload === -1) {
                } else {
                    state.complete = state.complete + action.payload
                }
            }
        }
    })

const todoReducer = todoSlice.reducer;
const {addToDo, deleteToDo, allCounter, completeCounter} = todoSlice.actions

export default todoReducer
export const todoActions = {addToDo, deleteToDo, allCounter, completeCounter}