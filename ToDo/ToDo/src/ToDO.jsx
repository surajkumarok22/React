import "./Todo.css";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function ToDo(){
    let [todo, setTodo] = useState([{task: "sample-task", id: uuidv4()}]);
    let[Newtodo, setNewtodo] = useState("");

    let addNewTask = () => {
        setTodo([...todo, {task: Newtodo, id: uuidv4()}]);
        setNewtodo("");
    };

    let updateTodoValue = (event) => {
        setNewtodo(event.target.value);
    }
    return (
        <div>
                <input type="text" placeholder="add a task" value={Newtodo} onChange={updateTodoValue}/>

                <button onClick={addNewTask}>Add Task</button>


                <br />
                <br />
                
                <hr />
                <h4>Task to do</h4>
                <ul>
                    {
                        todo.map((todo) => {
                            <li key={todo.id}>
                           <span>{todo.task}</span>
                           &nbsp;
                           <button>Delete</button>
                            </li>
                        })
                    }
                </ul>
        </div>
    )
}