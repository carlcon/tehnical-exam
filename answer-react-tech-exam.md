=======================================================
Question #1 - React - Identify the Problem and Refactor
=======================================================

Please identify the problems and tell us what the problems are, then improve this React Component by coding your own version!

It would be a plus point if you can convert/refactor them into React hooks.

```js
class MyComponent extends React.Component {
  constructor(props) {
    // set the default internal state
    this.state = {
      clicks: 0,
    };
  }

  componentDidMount() {
    this.refs.myComponentDiv.addEventListener("click", this.clickHandler);
  }

  componentWillUnmount() {
    this.refs.myComponentDiv.removeEventListener("click", this.clickHandler);
  }

  clickHandler() {
    this.setState({
      clicks: this.clicks + 1,
    });
  }

  render() {
    let children = this.props.children;

    return (
      <div className="my-component" ref="myComponentDiv">
        <h2>My Component ({this.state.clicks} clicks})</h2>
        <h3>{this.props.headerText}</h3>
        {children}
      </div>
    );
  }
}
```

======
ANSWER
======
Put your answer here:

Errors

1. Uncaught ReferenceError: Must call `super` constructor in derived class before accessing 'this' or returning from derived constructor
2. Uncaught TypeError: `this.setState` is not a function
3. Uncaught TypeError: Cannot read properties of undefined (reading 'clicks') at `HTMLDivElement.clickHandler`
4. No export

Solutions

1. Should call `super(props)` in constructor
2. Should call `this.state.clicks` not `this.clicks`
3. Should bind the clickHandler function by adding this on the contructor `this.clickHandler = this.clickHandler.bind(this)`;
4. Export so that we import the component to the app.js

**Please see my own version of the component using react hooks**

```js
import React, { useState } from "react";

export default function MyComponent2(props) {
  const [clicks, setClicks] = useState(0);

  function clickHandler() {
    setClicks((prevClicks) => prevClicks + 1);
  }

  return (
    <div className="my-component" onClick={clickHandler}>
      <h2>My Component ({clicks} clicks)</h2>
      <h3>{props.headerText}</h3>
      {props.children}
    </div>
  );
}
```

=======================================================
Question #2 - React - Solve the Problem
=======================================================

Complete the following <TodoList> component to display todos and allow for adding and removing of todo items

```js
const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
    case "REMOVE_TODO":
  }
};

const TodoList = () => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li>
            <button>Remove todo</button>
          </li>
        ))}
      </ul>
      <button>Add todo</button>
    </div>
  );
};
```

======
ANSWER
======
Put your answer here:

```js
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
```
