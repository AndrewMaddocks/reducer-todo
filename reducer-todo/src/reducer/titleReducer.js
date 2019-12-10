export const initialState = {
  todoItem: [
    {
      item: "I hope I get this done!",
      completed: false,
      id: Date.now()
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_TODO_ITEM":
      const newTodoItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todoItem: [...state.todoItem, newTodoItem]
      };

    default:
      return state;
  }
};
