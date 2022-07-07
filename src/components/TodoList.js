import React from "react";
import Todo from "./Todo";

const TodoList = ({todos,setTodos, filteredTodos,editingText,setEditingText,todoEditing,setTodoEditing,completedDeleteHandler,allDeleteHandler}) =>{

    return (
        <div className="d-flex flex-column my-4 todo-container">
            <ul className="list-group todo-list">
                {filteredTodos.map(todo => (
                    <Todo
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}
                        setEditingText = {setEditingText}
                        setTodoEditing = {setTodoEditing}
                        editingText = {editingText}
                        todoEditing = {todoEditing}
                    />
                ))}
            </ul>
            <div className="d-flex flex-row justify-content-around my-4 delete-todos">
                <button onClick={completedDeleteHandler} className="w-50 me-4 completeTodosDelete">Completed delete</button>
                <button onClick={allDeleteHandler} className="w-50 ms-4 allTodosDelete"> All delete</button>
            </div>
        </div>
    );
}

export default  TodoList;