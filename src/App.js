import React, { useEffect, useState } from "react";
import "./App.css";
// import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  //Use Effect Stuff
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  /*useEffect(() => {
  const json = localStorage.getItem("todos")
  const loadedTodos = JSON.parse(json)

  if(loadedTodos){
    setTodos(loadedTodos)
  }
}, [])


useEffect(() => {
  const json  = JSON.stringify(
    localStorage.setItem("todos", json)
  )
}, [todos])
*/

  //State Stuff
  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const completedDeleteHandler = () => {
    setTodos(todos.filter((todo) => todo.completed !== true));
  };

  const allDeleteHandler = (id) => {
    setTodos(todos.filter((el) => el.id === id));
  };

  return (
    <div className="App">
      <div className=" row">
        <div className=" col-10 col-md-8 mx-auto mt-4 bg-secondary">
          <header className="bg-black App-header">
            <h1 className="text-center text-white">My TodoList</h1>
          </header>
          <Form
            todos={todos}
            setTodos={setTodos}
            userInput={userInput}
            setUserInput={setUserInput}
            setStatus={setStatus}
          />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            setEditingText={setEditingText}
            setTodoEditing={setTodoEditing}
            editingText={editingText}
            todoEditing={todoEditing}
            completedDeleteHandler={completedDeleteHandler}
            allDeleteHandler={allDeleteHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
