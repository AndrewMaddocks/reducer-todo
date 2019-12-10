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
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todoItem: state.todoItem.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todoItem: state.todoItem.filter(item => {
          if (item.completed === false) {
            return {};
          }
        })
      };
    default:
      return state;
  }
};
