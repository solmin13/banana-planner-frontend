import { useState } from 'react';
import '../css/TodoItem.css';
import TodoList from './TodoList';
import Diary from './Diary';

function TodoItem(props){
    let btnTitle = ['TodoList','Diary'];
    let [selectedTitle,setSelectedTitle] = useState(0);
    let [selectedDate,setSelectedDate] = useState(props.date);
    return(
        <div>
            <button id="itemChangeBtn" onClick={()=>{
                    selectedTitle == 0 ? setSelectedTitle(1) : setSelectedTitle(0)
                }}>{btnTitle[selectedTitle]}</button>
            <h2>날짜</h2>
            <div id="itemBox">
                {
                    selectedTitle == 0 ? <TodoList></TodoList> : <Diary></Diary>
                }
            </div>
        </div>
    );
}

export default TodoItem;