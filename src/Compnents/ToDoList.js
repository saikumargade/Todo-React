import  React from "react";
import ToDoItem from "./ToDoItem";

function TodoList(props) {
    return(
        <ul>
            {props.list.map((item, index)=><ToDoItem key={index} todo={item}/>)}
        </ul>
    )
}

export default TodoList;