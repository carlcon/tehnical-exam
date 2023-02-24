import React, { useReducer, useState } from "react";

let nextId = 1;

const todosReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: action.id, text: action.text }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export const TodoList = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleAddTodo(text) {
    dispatch({
      type: "ADD_TODO",
      id: nextId++,
      text: text,
    });
  }

  function handleRemoveTodo(id) {
    dispatch({
      type: "REMOVE_TODO",
      id: id,
    });
  }

  return (
    <div>
      <TodoListComponent todos={todos} handleRemoveTodo={handleRemoveTodo} />
      <AddTodo handleAddTodo={handleAddTodo} />
    </div>
  );
};

function TodoListComponent({ todos, handleRemoveTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>
              Remove todo
            </button>
          </>
        </li>
      ))}
    </ul>
  );
}

function AddTodo({ handleAddTodo }) {
  const [todoInput, setTodoInput] = useState("");

  return (
    <>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        onClick={() => {
          setTodoInput("");
          handleAddTodo(todoInput);
        }}
      >
        Add todo
      </button>
    </>
  );
}
