import React from 'react';
import {useSelector} from "react-redux";
import Task from "../Task/Task";

const Tasks = () => {
    const {todo} = useSelector(state => state['todoReducer'])
console.log(todo)
    return (
        <div>
            {todo.map(task=><Task key={task.id} task={task}/>)}
        </div>
    );
};

export default Tasks;