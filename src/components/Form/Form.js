import {useState} from "react";
import {useForm} from "react-hook-form";

import {carService} from "../../services/car.service";
import './Form.css'

const Form = ({update}) => {
    let [formError, setFormError] = useState({});
    const {register, handleSubmit, formState: {errors}} = useForm();

    const createCar = (car) => {
        setFormError({'model': [''], 'price': [''], 'year': ['']})
        carService.create(car).then(value => update(value)).catch(error => setFormError(error.response.data))
    }

    const deleteCar = (car) => {
        formError.detail = ''
        carService.deleteById(car.id).then(value => update(value)).catch(error => setFormError(error.response.data))
    }

    const updateCar = (car) => {
        setFormError({'model': [''], 'price': [''], 'year': ['']})
        carService.updateById(car.id, car).then(value => update(value)).catch(error => setFormError(error.response.data))
    }

    return (
        <div>
            <form className={'form'}>
                <div className={'inputs'}>
                    <div><label>Id (only for Update and Delete): <input type='number'
                                                                        defaultValue={''} {...register('id')}/></label>
                    </div>
                    {formError.detail && <span>{formError.detail}</span>}
                    <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                    {formError.model && <span>{formError.model[0]}</span>}
                    <div><label>Price:<input type="text" defaultValue={''} {...register('price')}/></label></div>
                    {formError.price && <span>{formError.price[0]}</span>}
                    <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                    {formError.year && <span>{formError.year[0]}</span>}
                </div>
                <div className={'buttons'}>
                    <button onClick={handleSubmit(createCar)}>Create</button>
                    <button onClick={handleSubmit(updateCar)}>Update</button>
                    <button onClick={handleSubmit(deleteCar)}>Delete</button>
                </div>
            </form>
        </div>
    );
};

export default Form;