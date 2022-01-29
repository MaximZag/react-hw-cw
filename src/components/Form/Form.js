import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../store/car.slice";

const Form = () => {
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useDispatch()

    const submit = (data) => {
        dispatch(carActions.addCar({data}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model:<input type="text" {...register('model')}/></label>
                <label>Price:<input type="text" {...register('price')}/></label>
                <label>Year:<input type="text" {...register('year')}/></label>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form;