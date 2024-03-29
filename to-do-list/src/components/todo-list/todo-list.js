import React from "react";
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = ({todos}) => {

    const el = todos.map((item) => {

            const {id, ...itemProps} = item;
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem {...itemProps}/>
                </li>
            );
        }
    );

    return (
        <ul className="list-group todo-list">
            {el}
        </ul>
    );
};

export default TodoList;
