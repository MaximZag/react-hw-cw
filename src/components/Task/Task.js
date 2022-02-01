import React from 'react';
import {useDispatch} from "react-redux";

import {todoActions} from "../../store/todo.slice";

const Task = ({task:{id, todo}}) => {

    const dispatch = useDispatch()

    const twoActions=()=>{
        dispatch(todoActions.deleteToDo({id}))
        dispatch(todoActions.allCounter(-1))
    }

    return (
        <div>
            <div>{todo}</div>
            <button onClick={twoActions}>Delete</button>
        </div>
    );
};

export default Task;