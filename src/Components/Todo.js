import React from "react";
import Input from "./Input";
import { useState } from "react";
import Todolist from "./Todolist";

//render the page
function Todo() {
  const [Data, setData] = useState(
    JSON.parse(localStorage.getItem("toDo")) || []
  );

  //delete task
  const deleteTodo = (id) => {
    let newTasks = Data.filter(task => task.id !== id)
    setData(newTasks)
  }

  return (
    <>
      <Input data={Data} setData={setData} />
      <Todolist data={Data} deleteTodo={deleteTodo} />
    </>
  );
}

export default Todo;
