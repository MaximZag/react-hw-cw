// import {useState} from "react";
import {useForm} from "react-hook-form";
// import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
// import {CarValidator} from "../../validators/car.validator";

const Form = ({update}) => {
    // const [formError, setFormError] = useState({});

    const {
        register, handleSubmit,
    } = useForm();

    const submit = (car) => {
        carService.create(car).then(value => update(value))
        // update(car)
        // .catch(error =>{
        // setFormError(error.response.data)
        // })
    }
    // const submit = async (car) => {
    //     try {
    //         const newCar = await carService.create(car);
    //         update(newCar)
    //
    //     }catch (error){
    //         setFormError(error.response.data)
    //     }
    // }
    // watch(event => console.log(event))
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {/*{errors.model && <span>{errors.model.message}</span>}*/}
                <div><label>Price:<input type="text" defaultValue={''} {...register('price')}/></label></div>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {/*{errors.price && <span>{errors.price.message}</span>}*/}
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {/*{errors.year && <span>{errors.year.message}</span>}*/}
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;