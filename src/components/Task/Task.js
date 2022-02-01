import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {todoActions} from "../../store/todo.slice";
import './Task.css'

const Task = ({task: {id, todo}}) => {
    const dispatch = useDispatch()

    const Actions = () => {
        dispatch(todoActions.deleteToDo({id}))
        dispatch(todoActions.allCounter(-1))
        if (check === true) {
            dispatch(todoActions.completeCounter(-1))
        }
    }

    const [check, setCheck] = useState(false)
    const [style, setStyle] = useState('unchecked')

    const checking = () => {
        setCheck(!check)
        if (check === false) {
            dispatch(todoActions.completeCounter(1))
            setStyle('checked')
        } else {
            dispatch(todoActions.completeCounter(-1))
            setStyle('unchecked')
        }
    }


    return (
        <div>
            <div className={'main'}>
                <input className={'checkbox'} type="checkbox" checked={check} onChange={checking}/>
                <div className={`${style}`}>{todo}</div>
                <button onClick={Actions}>Delete</button>
            </div>
        </div>
    );
};

export default Task;