import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {carService} from "../services/car.service";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data)
            dispatch(addCar({data: newCar}))

        } catch (e) {
            console.log(e.message)
        }
    }
)

export const deleteAsyncCar = createAsyncThunk(
    'carSlice/deleteAsyncCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id)
            dispatch(deleteCar({id}))

        } catch (e) {
            console.log(e.message)
        }
    }
)

export const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({data}, {dispatch}) => {
        try {
            await carService.updateById(data.id, data)
            dispatch(updatingCar({data}))
        } catch (e) {
            console.log(e.message)
        }
    }
)

const carSlice = createSlice(
    {
        name: 'carSlice',
        initialState: {cars: [], uniqcar: {}, status: null, error: null},
        reducers: {
            addCar: (state, action) => {
                state.cars.push(action.payload.data)
            },
            deleteCar: (state, action) => {
                state.cars = state.cars.filter(car => car.id !== action.payload.id)
            },
            getUniqCar: (state, action) => {
                state.uniqcar = {...action.payload.car}
            },
            updatingCar: (state, action) => {
                for (let i = 0; i < state.cars.length; i++) {
                    if (state.cars[i].id === action.payload.data.id) {
                        state.cars[i] = action.payload.data
                    }
                }
            },
        },
        extraReducers: {
            [getAllCars.pending]: (state, action) => {
                state.status = 'pending'
            },
            [getAllCars.fulfilled]: (state, action) => {
                state.status = 'fulfilled'
                state.cars = action.payload
            },
            [getAllCars.rejected]: (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            }
        }
    })

const carReducer = carSlice.reducer;
const {addCar, deleteCar, getUniqCar, updatingCar} = carSlice.actions

export default carReducer
export const carActions = {addCar, deleteCar, getUniqCar}