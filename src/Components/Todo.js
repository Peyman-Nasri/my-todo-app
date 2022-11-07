import React from "react";
import Input from "./Input";
import { useState } from "react";
import Todolist from "./Todolist";

function Todo() {
  const [Data, setData] = useState(
    JSON.parse(localStorage.getItem("toDo")) || []
  );

  return (
    <>
      <Input data={Data} setData={setData} />
      <Todolist data={Data} />
    </>
  );
}

export default Todo;
