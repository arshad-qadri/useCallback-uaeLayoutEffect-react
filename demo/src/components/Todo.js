import React, { memo } from "react";

const Todo = ({ addTodo, todos }) => {
  // const [todos, setTodos] = useState([]);
  // const handleTodo = () => {
  //   setTodos((perv) => [...perv, "New todo"]);
  // };
  console.log("todos");


  return (
    <>
      <h3>Todo</h3>
      {todos.length > 0
        ? todos.map((item, ind) => <div key={ind}>{item + ind}</div>)
        : "Empty todo"}
      <br />
      {/* <input placeholder="Enter totdo" /> */}
      <button onClick={addTodo}>Add Todo</button>
    
    </>
  );
};

export default memo(Todo);
