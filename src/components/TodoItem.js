import { useState } from 'react';
import { useEffect } from 'react';
import '../css/TodoItem.css';
import TodoList from './TodoList';

function TodoItem(props){
    
    return(
        <div>
            <button>TodoList</button>
            <h2>{props.selectedDate}</h2>
            <TodoList></TodoList>
        </div>
    );
}

export default TodoItem;