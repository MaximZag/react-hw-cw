import React from 'react';
import {useDispatch} from "react-redux";

import {deleteAsyncCar} from "../../store/car.slice";
import {carActions} from '../../store/car.slice'
import './Car.css'

const Car = ({car}) => {
    const {model, price, year, id} = car
    const dispatch = useDispatch()
    return (
        <div className={'car'}>
            <div className={'text'}>
                <div>{model}</div>
                <div>{price}</div>
                <div>{year}</div>
            </div>
            <div className={'buttons'}>
                <button onClick={() => dispatch(deleteAsyncCar({id}))}>Delete</button>
                <button onClick={() => dispatch(carActions.getUniqCar({car}))}>Update</button>
            </div>
        </div>
    );
};

export default Car;