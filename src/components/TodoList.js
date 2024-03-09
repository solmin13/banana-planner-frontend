import { useState } from "react";

function TodoList(props){
    let [addTodoBtn,setAddTodoBtn] = useState('+');

    return(
        <div>
            <div>
                <ul>
                    {/* DB와 연결하여 해당 고객의 정보 불러오기 */}
                </ul>
            </div>
            {
                addTodoBtn == '+' ? <button id='addTodoBtn' onClick={()=>{setAddTodoBtn('');}}>{addTodoBtn}</button>
                : <div>
                    <input type="text"></input>
                    <textarea></textarea>
                    <button onClick={()=>{setAddTodoBtn('+')}}>저장</button>
                </div>
            }
            
        </div>
    );
}
export default TodoList;