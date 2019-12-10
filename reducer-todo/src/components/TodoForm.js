import React, { useState } from "react";

const TodoForm = props => {
  const [newTodo, setNewTodo] = useState("");

  //   const handleChanges = e => {
  //     setNewTodo(e.target.value);
  //   };

  const handleSubmit = e => {
    e.preventDefault();
    props.addTodo(newTodo);
    setNewTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="item"
        placeholder="add todo..."
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />
      <div>
        <button type="submit">Add Todo</button>
        <button onClick={props.clearCompleted}>Clear Completed</button>
      </div>
    </form>
  );
};

export default TodoForm;
