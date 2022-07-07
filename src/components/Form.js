import React from "react";
import {v4 as uuid} from 'uuid'

// create Form to todo input
const Form = ({userInput,setUserInput,todos,setTodos,setStatus})=>{

    const userInputHandler = (e)=>{
        //e.preventDefault();
        setUserInput(e.target.value);
    };

    const submitTodoHandler = (e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text: userInput, completed: false, id: Math.random() }
        ]);
        setUserInput("");
    }

    const statusHandler = (e)=>{
        setStatus(e.target.value);
        
    }

    return(
        <form className="d-flex justify-content-between" >
        <div className="">
            <input type="text" className="todo-input" value={userInput} onChange={userInputHandler}/>
            <button onClick={submitTodoHandler} className="rounded text-primary todo-button" type="submit">add
        </button>
        </div> 
        <div className="text-blue select">
            <select onChange={statusHandler} name="todos" id="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
      
        
    );
}

export default Form;