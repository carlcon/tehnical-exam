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
