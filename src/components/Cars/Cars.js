import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Car from "../Car/Car";
import {getAllCars} from "../../store/car.slice";
import './Cars.css'

const Cars = () => {
    const {cars, status, error} = useSelector(state => state['carReducer'])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    return (
        <div className={'wrap'}>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;