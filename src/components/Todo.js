import React from 'react';
import './Todo.css';

const Todo = props => {

    return (
        <div 
            className = {`${props.completed ? "completed" : ""}`}
            onClick = {() => props.toggleCompleted(props.id)}>
                <p>{props.task}</p>
        </div>)
}


export default Todo;