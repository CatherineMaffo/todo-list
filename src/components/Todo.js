import React from "react";
import "./Todo.css";

const Todo = ({
  text,
  todo,
  todos,
  setTodos,
  editingText,
  setEditingText,
  todoEditing,
  setTodoEditing,
}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const editHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.text = editingText;
        }
        return todo;
      })
    );
    setTodoEditing(null);
    setEditingText("");
  };

  return (
    <li className=" d-flex justify-content-between my-2 todo">
      <div className="text">
        {todoEditing === todo.id ? (
          <input
            type="text"
            onChange={(e) => setEditingText(e.target.value)}
            value={editingText}
          />
        ) : (
          <h6 className={`todo-item ${todo.completed ? "completed" : ""}`}>
            {todo.text}
          </h6>
        )}
      </div>

      <div className="btns">
        <span onClick={completeHandler} className= {`mx-2 pe-auto ${todo.completed ? "text-success" : "secondary"}`}>
            <i className={`${todo.completed ? " fa-solid fa-circle-check " : "fa-regular fa-circle"}`}></i>
        </span>
        <span onClick={deleteHandler} className="mx-2 text-danger delete-btn">
            <i className="fa fa-trash"></i>
        </span>

        {todoEditing === todo.id ? (
          <span onClick={() => editHandler(todo.id)} className="mx-2 text-info updateTodo">
            updateTodo
          </span>
        ) : (
          <span onClick={() => setTodoEditing(todo.id)} className=" text-warning edit-btn">
            <i class="fa-regular fa-pen-to-square"></i>
          </span>
        )}
      </div>
    </li>
  );
};

export default Todo;
