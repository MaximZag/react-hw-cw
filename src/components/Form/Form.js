import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {todoActions} from "../../store/todo.slice";

const Form = () => {
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useDispatch()
    const {all, complete} = useSelector(state => state['todoReducer'])

    const submit = (data) => {
        dispatch(todoActions.addToDo({data}))
        dispatch(todoActions.allCounter(1))
        reset()
    }

    return (
        <div>
            <div>
                All:{all} Completed:{complete}
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <label>To do:<input type="text" {...register('todo')}/></label>
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form;