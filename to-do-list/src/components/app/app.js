import React from "react";
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

    const todoData = [
        {label: 'Drink something', important: false, id: 1},
        {label: 'Make app', important: true, id: 2},
        {label: 'Dance like mad cow', important: false, id: 3}
    ];

    return (
        <div className="todo-app">
            <AppHeader/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;
