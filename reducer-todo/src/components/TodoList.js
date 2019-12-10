import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      <ul>
        {props.todoItem.map(item => (
          <Todo
            key={item.id}
            item={item}
            toggleCompleted={props.toggleCompleted}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
