import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input onChange = {props.changeHandler} type = 'text' placeholder = 'Enter task' />
            <button onClick = {props.clickHandler} />
            <button onClick = {props.clickHandler1} />
        </form>
    );
}

export default TodoForm;