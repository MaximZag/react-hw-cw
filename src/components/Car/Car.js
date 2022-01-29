import React from 'react';
import {useDispatch} from "react-redux";
import {deleteAsyncCar} from "../../store/car.slice";

const Car = ({car}) => {
    const {model, price, year, id} = car
    const dispatch = useDispatch()
    return (
        <div>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={()=>dispatch(deleteAsyncCar({id}))}>Delete</button>
        </div>
    );
};

export default Car;