import "./App.css";
import { TodoList } from "./components/TodoList";
import { data } from "./data";
// import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";

function transformData(data) {
  const STATUSES = [1, 2];
  const statusObj = {};

  for (let i = 0; i < STATUSES.length; i++) {
    const person = data.filter((person) => person.status === STATUSES[i]);

    statusObj["status-" + parseInt(i + 1)] = person;
  }

  console.log(statusObj);

  return statusObj;
}

function App() {
  transformData(data);

  return (
    <div className="App">
      <h2>Question #1 - React - Identify the Problem and Refactor</h2>
      <MyComponent2 headerText="HeaderText props passed to MyComponent">
        This is the children of MyComponent
      </MyComponent2>
      <hr />

      <h2>Question #2 - React - Solve the Problem</h2>
      <TodoList />

      <h2>
        Technical Exam - Data Manipulation output should be now printed on the
        console
      </h2>
    </div>
  );
}

export default App;
