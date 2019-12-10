import React from "react";

const Todo = props => {
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={() => props.toggleCompleted(props.item.id)}
    >
      <li>{props.item.item}</li>
    </div>
  );
};

export default Todo;
