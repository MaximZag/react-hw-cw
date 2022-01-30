import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from '@hookform/resolvers/joi'

import {createCar, updateCar} from "../../store/car.slice";
import './Form.css'
import {CarValidator} from "../../validators/car.validator";

const Form = () => {
    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({
        resolver: joiResolver(CarValidator),
        mode: "onTouched"
    })

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
        <div className={'form'}>
            <form className={'inner'} onSubmit={handleSubmit(submit)}>
                <div className={'field'}>
                    <div>
                        <label>Model:<input type="text" {...register('model')}/></label>
                        {errors.model && <div className={'error'}>{errors.model.message}</div>}
                    </div>
                    <div>
                        <label>Price:<input type="text" {...register('price')}/></label>
                        {errors.price && <div className={'error'}>{errors.price.message}</div>}
                    </div>
                    <div>
                        <label>Year:<input type="text" {...register('year')}/></label>
                        {errors.year && <div className={'error'}>{errors.year.message}</div>}
                    </div>
                </div>
                <button>{uniqcar.id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default Form;