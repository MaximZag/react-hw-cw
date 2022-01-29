import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCar} from "../../store/car.slice";

const Form = () => {
    const {register, handleSubmit, reset, setValue} = useForm()
    const dispatch = useDispatch()
    const {uniqcar} = useSelector(state => state['carReducer'])

    useEffect(() => {
        setValue('model', uniqcar.model)
        setValue('price', uniqcar.price)
        setValue('year', uniqcar.year)
    }, [uniqcar.id])

    const submit = (data) => {
        if (uniqcar.id) {
            data = {...data, id: uniqcar.id}
            dispatch(updateCar({data}))
        } else {
            dispatch(createCar({data}))
        }
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model:<input type="text" {...register('model')}/></label>
                <label>Price:<input type="text" {...register('price')}/></label>
                <label>Year:<input type="text" {...register('year')}/></label>
                <button>{uniqcar.id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default Form;