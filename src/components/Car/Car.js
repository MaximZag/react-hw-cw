import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../store/car.slice";

const Car = ({car}) => {
    const {model, price, year, id} = car
    const dispatch = useDispatch()
    return (
        <div>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={()=>dispatch(carActions.deleteCar({id}))}>Delete</button>
        </div>
    );
};

export default Car;