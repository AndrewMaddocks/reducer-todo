import React from "react";

const Todo = props => {
  return (
    <div>
      <li>{props.item.item}</li>
    </div>
  );
};

export default Todo;
