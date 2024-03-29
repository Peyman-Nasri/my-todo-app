import React from "react";
import Input from "./Input";
import { useState } from "react";
import Todolist from "./Todolist";
import { Divider } from "@mui/material";

//render the page
function Todo() {
  //state
  // Data=getter setData=setter
  const [Data, setData] = useState(
    JSON.parse(localStorage.getItem("toDo")) || []
  );
  const [updateData, setUpdateData] = useState();

  //edit task
  const editTodo = (selectedId) => {
    const { title, desc, id } = Data.find(({ id }) => id === selectedId);
    setUpdateData({ title, desc, id });
  };

  //delete task
  const deleteTodo = (id) => {
    if (window.confirm("Are you sure to delete this service?")) {
      const newTasks = Data.filter(({ id: taskId }) => taskId !== id);
      setData(newTasks);
    }
  };

  return (
    <>
      {/* rendering a new todo form */}
      <Input data={Data} setData={setData} updateData={updateData} />

      <Divider style={{ margin: "1em 0" }} />
      {/* displaying the list of todoes */}
      <Todolist data={Data} deleteTodo={deleteTodo} editTodo={editTodo} />
    </>
  );
}

export default Todo;
