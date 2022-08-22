import { useCallback, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((perv) => [...perv, "New todo"]);
  }, [todos]);

  // const addTodo = () => {
  //   setTodos((perv) => [...perv, "New todo"]);
  // };
  return (
    <div className="App">
      <Todo todos={todos} addTodo={addTodo} />
      <h3>Counter</h3>
      <h1> {count} </h1>
      <hr></hr>
      <button onClick={increment}>+</button>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
