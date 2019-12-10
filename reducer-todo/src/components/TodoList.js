import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      <ul>
        {props.todoItem.map(item => (
          <Todo key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
