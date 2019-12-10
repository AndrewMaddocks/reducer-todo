import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { initialState, reducer } from "./reducer/titleReducer";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addTodo = item =>
    dispatch({ type: "ADD_NEW_TODO_ITEM", payload: item });
  console.log(state.todoItem);

  return (
    <div className="App">
      <div>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todoItem={state.todoItem} />
      </div>
    </div>
  );
}

export default App;
