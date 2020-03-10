// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        props.data.todos.map((el, index) => {
            return (
                <Todo toggleCompleted = {props.toggleCompleted} key = {index} id = {el.id} task = {el.task} completed = {el.completed}/>

    )}))};

export default TodoList;